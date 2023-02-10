import React from "react";

function Teams(props) {
  return (
    <div>
      {props.data.map((index) => {
        return (
          <div className="teamBox">
            <h3>{props.data[0].name}</h3>
            <p>Location : {props.data[0].location}</p>
            <p>Division : {props.data[0].division}</p>
            <p>Creation : {props.data[0].creation}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Teams;
