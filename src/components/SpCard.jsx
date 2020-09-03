import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

function SpCard(props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="sp-card">
      <img src={props.img} alt="image" />
      <div className="sp-card-rating">
        <div className="sdf-h5 dark">{props.name}</div>

        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          classNames="rating-star"
        />
      </div>
    </div>
  );
}

export default SpCard;
