import React from "react";
import { Link } from "react-router-dom";

const ChooseTeamCard = ({ el, index }) => {
  return (
    <div key={index} className="col-6 col-sm-2 mb-2">
      <Link
        to={""}
        className="searched-team-item rounded shadow-sm text-center"
      >
        <div className="">
          <img
            className="searched-team-item-img"
            src="assets/images/teamA.webp"
            alt="Team logo"
          />
          <p className="px-1">{el}</p>
        </div>
      </Link>
    </div>
  );
};

export default ChooseTeamCard;
