import React from "react";
// import PropTypes from 'prop-types';

function CharacterCard(props) {
  return (
    <div className="card">
      {/* img size is 250 x 295 */}
      <img src={props.img} alt="image" />
      <div className="cname">
        <p className="sdf-h3">{props.name}</p>
      </div>
    </div>
  );
}
/*
CharacterCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
*/

export default CharacterCard;
