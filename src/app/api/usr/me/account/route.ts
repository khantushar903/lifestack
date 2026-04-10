import pool from "@/_lib/config/db";
import { getAuthUser, unauthorized } from "@/_lib/authHelper";
import { compareHash } from "@/_lib/hashManager";
import { cookies } from "next/headers";

// POST /api/usr/me/account — permanently delete account
// Using POST instead of DELETE because apiRequest doesn't send body on DELETE
export async function POST(request: Request) {
  const user = await getAuthUser();
  if (!user) return unauthorized();

  try {
    const { password } = await request.json();

    if (!password) {
      return Response.json({ success: false, message: "Password is required to delete account" }, { status: 400 });
    }

    // Verify password
    const { rows } = await pool.query(`SELECT password_hash FROM users WHERE id = $1`, [user.id]);
    if (rows.length === 0) {
      return Response.json({ success: false, message: "User not found" }, { status: 404 });
    }

    const isValid = await compareHash(password, rows[0].password_hash);
    if (!isValid) {
      return Response.json({ success: false, message: "Password is incorrect" }, { status: 401 });
    }

    // Delete user (CASCADE will handle related records)
    await pool.query(`DELETE FROM users WHERE id = $1`, [user.id]);

    // Clear cookie
    const cookieStore = await cookies();
    cookieStore.delete("token");

    return Response.json({ success: true, message: "Account deleted permanently" });
  } catch (err) {
    return Response.json({ success: false, message: String(err) }, { status: 500 });
  }
}
