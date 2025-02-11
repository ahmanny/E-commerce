"use client";

import { useState } from "react";

export default function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Function to check password match
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    if (newPassword && e.target.value !== newPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  // Function to reset password
  function resetPassword() {
    if (error) return; // Prevent submission if there's an error
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
  }

  return (
    <div className="flex flex-col justify-center items-center py-24 gap-6 w-[350px]">
      <div className="flex-col flex w-full">
        <label htmlFor="new-password">New Password</label>
        <input
          id="new-password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="input"
        />
      </div>

      <div className="flex-col flex w-full">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="input"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      <button
        onClick={resetPassword} // ✅ Now calls resetPassword when clicked
        className="btn mt-8"
        disabled={!newPassword || !confirmPassword || error !== ""}
      >
        Reset Password
      </button>
    </div>
  );
}
