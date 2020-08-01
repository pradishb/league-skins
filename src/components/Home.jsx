import React from "react";

export default function Login() {
  return (
    <div className="container">
      <div className="navbar">
        <button className="sdf-s-submit">LOGIN</button>
      </div>
      <div className="title-container">
        <p className="sdf-title">CHOOSE YOUR CHAMPION</p>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search.."
          name="searchbar"
          className="sdf-form-search"
        />
      </div>
    </div>
  );
}
