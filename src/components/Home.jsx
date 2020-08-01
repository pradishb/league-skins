import React from "react";

export default function Home() {
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
      <div className="cards-container">
        <div className="sdf-card"></div>
        <div className="sdf-card"></div>
        <div className="sdf-card"></div>
        <div className="sdf-card"></div>
      </div>
    </div>
  );
}
