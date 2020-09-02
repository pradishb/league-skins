import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SpCard(props) {
  return (
    <div className="sp-card">
      <img src={props.img} alt="image" />
      <div className="sp-card-rating">
        <div className="sdf-h5 dark">{props.name}</div>
        <div className="rating">
          <FontAwesomeIcon icon="star" color="white" />
          <FontAwesomeIcon icon="star" color="white" />
          <FontAwesomeIcon icon="star" color="white" />
          <FontAwesomeIcon icon="star" color="white" />
          <FontAwesomeIcon icon="star-half" color="white" />
        </div>
      </div>
    </div>
  );
}

export default SpCard;
