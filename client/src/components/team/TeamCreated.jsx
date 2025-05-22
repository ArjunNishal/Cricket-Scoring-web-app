import React from "react";
import CreateNewTeamForm from "../team/CreateNewTeamForm";
import { useNavigate } from "react-router-dom";

const TeamCreated = () => {
  const navigate = useNavigate();
  return (
    <div className="add-new-team-main d-flex align-items-center justify-content-center">
      <div className="add-new-team-inner">
        <div className="sticky-add-new-team-head">
          <div className=" py-2 d-flex align-items-center justify-content-start">
            <div className="back-btn">
              <button onClick={() => navigate(-1)} className="btn">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </div>
            <div className="h4 mb-0">Team Created</div>
          </div>
        </div>
        <CreateNewTeamForm startmatch={true} />
      </div>
    </div>
  );
};

export default TeamCreated;
