import React from "react";
import MatchCard from "./MatchCard";

const LiveMatches = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="match-list-wrapper py-5">
      <div className="row justify-content-center mx-0">
        {arr.map((el, index) => {
          return (
            <div key={index} className="col-lg-4 mb-3 col-md-6 col-12">
              <MatchCard />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LiveMatches;
