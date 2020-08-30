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
      <div className="cards-container">{characterdata.map(createEntry)}</div>
    </div>
  );
}
