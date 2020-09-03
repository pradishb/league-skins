import React, { useState, useMemo } from "react";
import CharacterCard from "./CharacterCard";
import characterdata from "../characterdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
console.log(characterdata);

//joins and filters
function cs(...args) {
  console.log(args);
  return args
    .filter(
      (arg) => arg !== undefined && arg !== null && arg !== "" && arg !== false
    )
    .join(" ");
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  function handleClick(e) {
    const value = e.target.value;
    setCategory(value);
  }

  const filteredCards = useMemo(() => {
    let cards = characterdata;
    if (search) {
      cards = cards.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category) {
      cards = cards.filter((card) => card.role.toLowerCase() === category);
    }
    return cards;
  }, [search, category]);

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
          <button
            className={cs("role-button", category === "" && "active")}
            onClick={handleClick}
            value=""
          >
            ALL
          </button>
          <button
            className={cs("role-button", category === "assasin" && "active")}
            onClick={handleClick}
            value="assasin"
          >
            ASSASINS
          </button>
          <button
            className={cs("role-button", category === "fighter" && "active")}
            onClick={handleClick}
            value="fighter"
          >
            FIGHTERS
          </button>
          <button
            className={cs("role-button", category === "mage" && "active")}
            onClick={handleClick}
            value="mage"
          >
            MAGES
          </button>
          <button
            className={cs("role-button", category === "marksman" && "active")}
            onClick={handleClick}
            value="marksman"
          >
            MARKSMEN
          </button>
          <button
            className={cs("role-button", category === "support" && "active")}
            onClick={handleClick}
            value="support"
          >
            SUPPORTS
          </button>
          <button
            className={cs("role-button", category === "tank" && "active")}
            onClick={handleClick}
            value="tank"
          >
            TANKS
          </button>
        </div>
      </div>
      <div className="cards-container">
        {filteredCards.map((characterInfo) => (
          <CharacterCard
            role={characterInfo.role}
            key={characterInfo.id}
            img={characterInfo.img}
            name={characterInfo.name}
          />
        ))}
      </div>
    </div>
  );
}
