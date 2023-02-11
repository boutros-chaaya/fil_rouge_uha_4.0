import React from "react";

function Teams(props) {
  return (
    <div>
      {props.data.map((object) => {
        return (
          <div className="teamBox" style={{backgroundColor: object.primaryColor}}>
            <h3>{object.name}</h3>
            <p>Location : {object.location}</p>
            <p>Division : {object.division}</p>
            <p>Creation : {object.creation}</p>
            {console.log(object.primaryColor)}
          </div>
        );
      })}
    </div>
  );
}

export default Teams;
