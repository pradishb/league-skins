import React from "react";
import CharacterCard from "./CharacterCard";
import characterdata from "../characterdata";

function createEntry(characterInfo) {
  return (
    <CharacterCard
      key={characterInfo.id}
      img={characterInfo.img}
      name={characterInfo.name}
    />
  );
}

export default function Home() {
  return (
    <div className="container">
      <div className="navbar">
        <button className="sdf-s-submit-minimal">LOGIN</button>
        <button className="sdf-s-submit">SIGN UP</button>
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
        <div className="role-button-container">
          <button className="role-button">ALL</button>
          <button className="role-button">ASSASINS</button>
          <button className="role-button">FIGHTERS</button>
          <button className="role-button">MAGES</button>
          <button className="role-button">MARKSMEN</button>
          <button className="role-button">SUPPORTS</button>
          <button className="role-button">TANKS</button>
        </div>
      </div>
      <div className="cards-container">{characterdata.map(createEntry)}</div>
    </div>
  );
}
