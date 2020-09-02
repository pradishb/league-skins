import React from "react";
import SpCard from "./SpCard";
import ratingdata from "./jason_data/ratingdata";

export default function TopRating() {
  return (
    /*top-rating-background is a container but is used for
    background texture image: this container contains all
    the elements of TopRating page*/

    <div className="top-rating-background">
      <div className="top-rating-container">
        <div className="sp-container">
          <div className="sp-title">
            <p className="sdf-h1 dark">TOP RATED SKINS</p>
          </div>
          <div className="sp-card-container">
            {ratingdata.map((ratingInfo) => (
              <SpCard
                key={ratingInfo.id}
                name={ratingInfo.name}
                img={ratingInfo.img}
              />
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
