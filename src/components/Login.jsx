import React from "react";

export default function Login() {
  return (
    <div className="login-container">
      <p>Please login to continue.</p>
      <input
        type="email"
        name="form"
        placeholder="Email"
        className="sdf-form"
      />
      <input
        type="password"
        name="form"
        placeholder="Enter Password"
        className="sdf-form"
      />
      <input
        type="password"
        name="form"
        placeholder="Confirm Password"
        className="sdf-form"
      />
      <button className="sdf-submit-m"> LOGIN </button>
      <div>
        <a href="#">Forgot password?</a>
        <a href="#">Not registered?</a>
      </div>
    </div>
  );
}
