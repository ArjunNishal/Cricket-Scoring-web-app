import React from "react";

const MatchCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <small>T20</small>
          <small>Sat 11 Jan</small>
        </div>
      </div>
      <div className="card-body">
        <div className="team-scores">
          <div className="row mx-0 mb-2">
            <div className="col-8">
              <div className="d-flex align-items-start">
                <img
                  className="match-card-team-logo"
                  src="assets/images/ground.jpg"
                  alt="team"
                />
                <span>RCB</span>
              </div>
            </div>
            <div className="col-4">
              <span>290/8 (20)</span>
            </div>
          </div>
          <div className="row mx-0 mb-2">
            <div className="col-8">
              <div className="d-flex align-items-start">
                <img
                  className="match-card-team-logo"
                  src="assets/images/ground.jpg"
                  alt="team"
                />
                <span>RCB</span>
              </div>
            </div>
            <div className="col-4">
              <span>290/8 (20)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
