import React from "react";

export default function Signup() {
  return (
    <div className="login-container">
      <p>Please sign up to continue.</p>
      <input type="text" name="form" placeholder="Name" className="sdf-form" />
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
      <button className="sdf-m-submit"> SIGN UP </button>
      <div>
        <a href="#">Already a member?</a>
      </div>
    </div>
  );
}
