import React from "react";
import { Link } from "react-router-dom";

const MatchCard = () => {
  const arr = [1, 2];
  return (
    <Link to={"/match-summary"} className="card  match-card-wrapper">
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <small>T20</small>
          <small>Sat 11 Jan</small>
        </div>
      </div>
      <div className="card-body">
        <div className="team-scores position-relative">
          <div className="row mx-0 mb-2">
            {arr.map((el, index) => {
              return (
                <div key={index} className="col-6">
                  <div className="text-center">
                    <img
                      className="match-card-team-logo me-1"
                      src={`assets/images/${
                        index === 0 ? "teamA.png" : "teamB.png"
                      }`}
                      alt="team"
                    />
                  </div>
                  <div className="text-center">
                    <span className="team-matchcard">RCB</span>
                    <br />
                    <span className="score-matchcard">234/4</span>
                    <br />
                    <span className="overs-matchcard">
                      <small>(20.1)</small>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="match-card-live-indicator text-center pb-1">
            <span class="badge rounded-pill text-bg-success">Live</span>
          </div>
        </div>
        <div className="scorecard-btn-div ">
          <div className="d-flex align-items-center justify-content-center">
            <span>RCB needs 120 runs to win</span>
            {/* <button className="btn btn-primary">Scorecard</button> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MatchCard;
