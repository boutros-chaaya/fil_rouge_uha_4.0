import React from "react";

function Players(props) {

  return (
    <div className="playersBox">
      <button type="submit" className="closeButton" onClick={props.closePlayersModal}>
        X
      </button>
      {props.data.map((player) => {
        return (
          <div className="singlePlayerBox">
            <p className="playerName">{player.name}</p>
            <p className="playerPosition">Position : {player.position}</p>
            <p className="playerNumber">Number : {player.No}</p>
            <p className="playerHeight">Height : {player.height} m</p>
            <p className="playerWeight">Weight : {player.weight} Kg</p>
          </div>
        );
      })}
    </div>
  );
}

export default Players;
