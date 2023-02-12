import React from "react";

function Teams(props) {
  return (
    <div>
      {props.data.map((object) => {
        let teamName = object.name.toUpperCase();
        return (
          <div
            className="teamBox"
            style={{ backgroundColor: object.primaryColor }}
          >
            <img className="teamImg" src={object.logo} alt="teamImg" />
            <div className="vl"> . . . . . . . . . . . .</div>
            <div className="teamBoxInfo">
              <p className="teamName">{teamName}</p>
              <hr/>
              <br/>
              <p className="teamYearText">Year : {object.year}</p>
              <p className="teamLocationText">Location : {object.location}</p>
              <p className="teamDivisionText">Division : {object.division}</p>
              <p className="teamCreationText">Creation : {object.creation}</p>
              <button className="playersButton"  style={{ backgroundColor: object.secondaryColor }}>Players</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Teams;
