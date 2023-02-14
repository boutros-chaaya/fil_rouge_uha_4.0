import React from "react";
import Players from "./Players";
import { useState, useEffect } from "react";

function Teams(props) {
  const [playersData, setPlayersData] = useState([]);
  const playersUrl = "http://localhost:8000/players";
  const [teamRoster, setTeamRoster] = useState(playersData); // list of the players in the team ref teamId

  fetch(playersUrl)
    .then((response) => response.json())
    .then((players) => {
      setPlayersData(players);
    });

  const openPlayersModal = (teamId, teamColor) => {
    const playersModal = document.querySelector(".playersBox");

    let playersTab = playersData;

    for (let player of playersTab) {
      if (player.team == teamId) {
        teamRoster.push(player);
        setPlayersData(teamRoster);
      }
    }

    playersModal.style.backgroundColor = teamColor;
    playersModal.style.display = "block";
  };

  const closePlayersModal = () => {
    const playersModal = document.querySelector(".playersBox");

    setTeamRoster([]);

    playersModal.style.display = "none";
  };

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
              <hr />
              <br />
              <p className="teamYearText">Year : {object.year}</p>
              <p className="teamLocationText">Location : {object.location}</p>
              <p className="teamDivisionText">Division : {object.division}</p>
              <p className="teamCreationText">Creation : {object.creation}</p>
              <button
                className="playersButton"
                style={{ backgroundColor: object.secondaryColor }}
                onClick={() => {
                  openPlayersModal(object.id, object.secondaryColor);
                }}
              >
                Players
              </button>
            </div>
          </div>
        );
      })}

      <Players data={teamRoster} closePlayersModal={closePlayersModal} />
    </div>
  );
}

export default Teams;
