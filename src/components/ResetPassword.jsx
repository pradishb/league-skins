import React from "react";

export default function ResetPassword() {
  return (
    <div className="login-container">
      <p>Reset your password.</p>
      <input type="text" name="form" placeholder="Email" className="sdf-form" />
      <input
        type="password"
        name="form"
        placeholder="New Password"
        className="sdf-form"
      />
      <input
        type="password"
        name="form"
        placeholder="Confirm Password"
        className="sdf-form"
      />
      <button className="sdf-submit-m"> CONFIRM </button>
    </div>
  );
}
