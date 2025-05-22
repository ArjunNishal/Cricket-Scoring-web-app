import React from "react";
import OverTimeLine from "./OverTimeLine";
import CurrentPlayers from "./CurrentPlayers";
import ScorecardTabs from "./ScorecardTabs";

const MatchDetails = () => {
  const arr = [1, 2];
  return (
    <>
      <div className="match-page-main">
        <div className="container px-0 px-sm-auto  py-sm-5">
          <div className="match-summary-banner ">
            <div className="row mx-0 py-3 align-items-center justify-content-center">
              {/* {arr.map((el, index) => {
                return (
                 
                );
              })} */}

              <div className="col-5">
                <div className="text-center p-sm-4">
                  <img
                    src="assets/images/teamA.webp"
                    className="match-sum-banner-team-logo mb-2"
                    alt="team logo"
                  />
                  <div className="match-sum-heading h2">India</div>
                  <div>
                    <span className="match-sum-score h4">120/5</span>{" "}
                    <small className="match-sum-overs">(19.6)</small>
                  </div>
                  {/* <h6 className="match-sum-overs"></h6> */}
                </div>
              </div>
              <div className="col-2 text-center">
                {/* <img
                  src="assets/images/vs.webp"
                  className="match-sum-vs-img"
                  alt=""
                /> */}
                <strong className="match-sum-vs-text">Vs</strong>
              </div>
              <div className="col-5">
                <div className="text-center p-sm-4">
                  <img
                    src="assets/images/teamB.webp"
                    className="match-sum-banner-team-logo mb-2"
                    alt="team logo"
                  />
                  <div className="match-sum-heading h2">Pakistan</div>
                  <div>
                    <span className="match-sum-score h4">120/5</span>{" "}
                    <small className="match-sum-overs">(19.6)</small>
                  </div>
                </div>
              </div>

              <div className="col-12 text-center ">
                <div className="match-sum-current-over"></div>
                <h6 className="match-sum-bottom-line">
                  India need 10 runs to win
                </h6>
              </div>
              {/* over Time line */}
              <OverTimeLine />

              {/* Current Players */}
              <CurrentPlayers />
              {/* Scorecard tabs */}
              <div className="px-sm-3 px-0">
                <ScorecardTabs />
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default MatchDetails;
