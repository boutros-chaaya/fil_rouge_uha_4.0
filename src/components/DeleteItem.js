import React from "react";

function DeleteItem(props) {
  return (
    <div className="authentModal" >
        <button type="submit" className="closeDeleteButton" onClick={props.closePlayersModal}>
        X
      </button>
      <p className="authentText">Authentification</p>

      <div className="inputBox">
      <input
        className="inputField"
        type="text"
        required="required"
        placeholder="Username"
      />
    </div>

    <div className="inputBox">
      <input
        className="inputField"
        type="password"
        required="required"
        placeholder="Password"
      />
    </div>

    </div>
  );
}

export default DeleteItem;
