import pool from "@/_lib/config/db";
import { getAuthUser, unauthorized } from "@/_lib/authHelper";
import { compareHash, generateHash } from "@/_lib/hashManager";

// PATCH /api/usr/me/password — change password
export async function PATCH(request: Request) {
  const user = await getAuthUser();
  if (!user) return unauthorized();

  try {
    const { currentPassword, newPassword } = await request.json();

    if (!currentPassword || !newPassword) {
      return Response.json({ success: false, message: "Current and new password are required" }, { status: 400 });
    }

    if (newPassword.length < 8) {
      return Response.json({ success: false, message: "New password must be at least 8 characters" }, { status: 400 });
    }

    // Fetch current hash
    const { rows } = await pool.query(`SELECT password_hash FROM users WHERE id = $1`, [user.id]);
    if (rows.length === 0) {
      return Response.json({ success: false, message: "User not found" }, { status: 404 });
    }

    // Verify current password
    const isValid = await compareHash(currentPassword, rows[0].password_hash);
    if (!isValid) {
      return Response.json({ success: false, message: "Current password is incorrect" }, { status: 401 });
    }

    // Hash and update
    const newHash = await generateHash(newPassword);
    await pool.query(`UPDATE users SET password_hash = $1 WHERE id = $2`, [newHash, user.id]);

    return Response.json({ success: true, message: "Password changed successfully" });
  } catch (err) {
    return Response.json({ success: false, message: String(err) }, { status: 500 });
  }
}
