import React from "react";
import CreateNewTeamForm from "../team/CreateNewTeamForm";

const AddNewTeam = () => {
  return (
    <div className="add-new-team-main">
      <div className="add-new-team-inner">
        <div className="sticky-add-new-team-head">
          <div className="shadow-sm py-2 d-flex align-items-center justify-content-start">
            <div className="back-btn">
              <button
                data-bs-target="#startmatchCarousel"
                data-bs-slide-to="1"
                className="btn"
              >
                <i class="fa-solid fa-chevron-left"></i>
              </button>
            </div>
            <div className="h4 mb-0">Add New Team</div>
          </div>
        </div>
        {/* <div className="add-new-team-form"> */}
        <CreateNewTeamForm startmatch={true} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default AddNewTeam;
