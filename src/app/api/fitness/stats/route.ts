import pool from "@/_lib/config/db";
import { getAuthUser, unauthorized } from "@/_lib/authHelper";

// GET /api/fitness/stats — get fitness summary stats
export async function GET() {
  const user = await getAuthUser();
  if (!user) return unauthorized();

  try {
    // This week's workout hours
    const weekWorkouts = await pool.query(
      `SELECT COALESCE(SUM(duration_mins), 0) as total_mins, COUNT(*) as workout_count
       FROM workout_logs
       WHERE userId = $1 AND log_date >= NOW() - INTERVAL '7 days'`,
      [user.id]
    );

    // Total calories burned this week (from workouts)
    const weekCaloriesBurned = await pool.query(
      `SELECT COALESCE(SUM(calories_burned), 0) as total
       FROM workout_logs
       WHERE userId = $1 AND log_date >= NOW() - INTERVAL '7 days'`,
      [user.id]
    );

    // Weekly calorie intake from calorie_logs
    const weekCaloriesConsumed = await pool.query(
      `SELECT COALESCE(SUM(calories_consumed), 0) as total_consumed,
              COALESCE(SUM(calories_burned), 0) as total_burned
       FROM calorie_logs
       WHERE userId = $1 AND log_date >= NOW() - INTERVAL '7 days'`,
      [user.id]
    );

    // Today's calorie summary
    const todayCalories = await pool.query(
      `SELECT COALESCE(SUM(calories_consumed), 0) as consumed,
              COALESCE(SUM(calories_burned), 0) as burned
       FROM calorie_logs
       WHERE userId = $1 AND log_date::date = CURRENT_DATE`,
      [user.id]
    );

    // User height & weight for BMI
    const userInfo = await pool.query(
      `SELECT height_cm, current_weight FROM users WHERE id = $1`,
      [user.id]
    );

    const height_cm = userInfo.rows[0]?.height_cm || 0;
    const weight_kg = userInfo.rows[0]?.current_weight || 0;
    const bmi = height_cm > 0 ? (weight_kg / ((height_cm / 100) ** 2)).toFixed(1) : "N/A";

    const weeklyConsumed = parseInt(weekCaloriesConsumed.rows[0].total_consumed);
    const weeklyBurnedFromLogs = parseInt(weekCaloriesConsumed.rows[0].total_burned);
    const weeklyBurnedFromWorkouts = parseInt(weekCaloriesBurned.rows[0].total);
    const totalWeeklyBurned = weeklyBurnedFromLogs + weeklyBurnedFromWorkouts;

    return Response.json({
      success: true,
      data: {
        weekly_duration_mins: parseInt(weekWorkouts.rows[0].total_mins),
        weekly_workout_count: parseInt(weekWorkouts.rows[0].workout_count),
        weekly_calories_burned: totalWeeklyBurned,
        weekly_calories_consumed: weeklyConsumed,
        weekly_calorie_balance: weeklyConsumed - totalWeeklyBurned,
        today_calories_consumed: parseInt(todayCalories.rows[0].consumed),
        today_calories_burned: parseInt(todayCalories.rows[0].burned),
        height_cm,
        weight_kg,
        bmi,
      },
    });
  } catch (err) {
    return Response.json({ success: false, message: String(err) }, { status: 500 });
  }
}
