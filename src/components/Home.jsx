import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import characterdata from "../characterdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    setFilteredCards(
      characterdata.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, characterdata]);

  return (
    <div className="container">
      <div className="navbar">
        <button className="sdf-submit-s-minimal">LOGIN</button>
        <button className="sdf-submit-s">SIGN UP</button>
      </div>
      <div className="title-container">
        <p className="sdf-title">CHOOSE YOUR CHAMPION</p>
        <p>FIND TOP RATED SKINS IN THE MARKET</p>
        <p>GIVE YOUR OWN RATING</p>
      </div>
      <div className="search-container">
        <FontAwesomeIcon icon="search" color="grey" />
        <input
          type="text"
          placeholder="Search.."
          name="searchbar"
          className="sdf-form-search"
          onChange={(e) => setSearch(e.target.value)}
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
      <div className="cards-container">
        {filteredCards.map((characterInfo) => (
          <CharacterCard
            key={characterInfo.id}
            img={characterInfo.img}
            name={characterInfo.name}
          />
        ))}
      </div>
    </div>
  );
}
