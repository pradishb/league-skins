import React from "react";

function CharacterCard(props) {
  return (
    <div className="card">
      {/* img size is 250 x 295 */}
      <img src={props.img} alt="image" />
      <div className="cname">
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}

export default CharacterCard;
