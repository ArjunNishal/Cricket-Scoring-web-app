import React from "react";

const CurrentPlayers = () => {
  return (
    <div className="col-12 py-2">
      <div className="current-players-main">
        <div className="d-flex justify-content-between">
          <div className="current-batters">
            <span className="current-batter-1">V.Kohli 42(22)</span>&nbsp;&nbsp;
            <span className="current-batter-2">R.Sharma 42(22)</span>
          </div>
          <div className="current-bowler">
            <p className="current-bowler text-end">Bumrah 11/2 (1.2)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPlayers;
