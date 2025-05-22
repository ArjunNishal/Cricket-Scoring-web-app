import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ChooseTeams = () => {
  const [currentSlide, setCurrentSlide] = useState("");

  const navigate = useNavigate();
  return (
    <div className="choose-team-main row px-md-0 px-1 mx-0 align-items-center justify-content-center">
      <div className="choose-team-wrapper  col-md-10 col-12  ">
        <div className="choose-team-heading py-3">
          <div className="h1 text-center fw-bold">Select Teams</div>
        </div>
        <div className="choose-team-select py-5">
          <div className="row mx-0">
            <div className="col-12 col-md-4 ">
              <div className="d-flex justify-content-center align-items-center">
                <Link to={"/select-team"} className="btn select-team-icon">
                  <i class="fa-solid fa-plus"></i>
                </Link>
              </div>
              <div className="text-center">
                <span className="h4" >Team A</span>
              </div>
            </div>
            <div className="col-12 col-md-4 py-3">
              <div className="h1 text-center">V/S</div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="d-flex justify-content-center align-items-center">
                <Link to={"/select-team"} className="btn select-team-icon">
                  <i class="fa-solid fa-plus"></i>
                </Link>
              </div>
              <div className="text-center">
                <span  className="h4">Team B</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" d-md-flex justify-content-center pb-5">
          <div className="">
            <div className="start-match-btn mb-2">
              <button className="btn btn-lg add-new-team-btn w-100">
                Start Match
              </button>
            </div>
            {/* <div className="cancel-match-btn btn-lg mb-2">
              <button
                onClick={() => navigate(-1)}
                className="btn btn-outline-secondary w-100"
              >
                Cancel
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* <SelectTeam /> */}

      {/* <SelectSquad /> */}

      {/* <AddNewTeam /> */}
    </div>
  );
};

export default ChooseTeams;
