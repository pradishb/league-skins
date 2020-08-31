import React from "react";

function CharacterCard(props) {
  return (
    <div className="card">
      {/* img size is 250 x 295 */}
      <img src={props.img} alt="image" />
      <div className="cname">
        <h3>{props.name}</h3>
      </div>
    </div>
  );
}

export default CharacterCard;
