import React from "react";

const MatchDetails = () => {
  const arr = [1, 2];
  return (
    <>
      <div className="container">
        <div className="match-summary-banner">
          <div className="row mx-0 py-3 justify-content-center">
            {arr.map((el, index) => {
              return (
                <div key={index} className="col-6">
                  <div className="text-center p-5">
                    <img src="assets/images/ground.jpg" className="match-sum-banner-team-logo mb-2"  alt="team logo" />
                    <h2 className="match-sum-heading">Mumbai XI</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchDetails;
