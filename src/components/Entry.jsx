import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          <img src={props.emoji} alt="Flexed Biceps" width="100" />
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.descrp}</dd>
    </div>
  );
}

export default Entry;
