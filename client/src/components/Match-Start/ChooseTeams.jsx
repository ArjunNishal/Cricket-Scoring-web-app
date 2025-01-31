import React, { useState } from "react";
import SelectTeam from "./SelectTeam";
import { useNavigate } from "react-router-dom";
import SelectSquad from "./SelectSquad";
import AddNewTeam from "./AddNewTeam";

const ChooseTeams = () => {
  const [currentSlide, setCurrentSlide] = useState("");

  const navigate = useNavigate();
  return (
    <div className="choose-team-main">
      <div id="startmatchCarousel" className="carousel slide">
        <div className="carousel-inner">
          {/* 0 */}
          <div className="carousel-item active">
            <div className="choose-team-wrapper">
              <div className="choose-team-heading py-3">
                <div className="h1 text-center ">Select Teams</div>
              </div>
              <div className="choose-team-select py-5">
                <div className="row mx-0">
                  <div className="col-12">
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        data-bs-target="#startmatchCarousel"
                        data-bs-slide-to="1"
                        className="btn select-team-icon"
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <div className="text-center">
                      <span>Team A</span>
                    </div>
                  </div>
                  <div className="col-12 py-3">
                    <div className="h3 text-center">V/S</div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        data-bs-target="#startmatchCarousel"
                        data-bs-slide-to="1"
                        className="btn select-team-icon"
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <div className="text-center">
                      <span>Team B</span>
                    </div>
                  </div>
                  <div className="col-12 pt-5">
                    <div className="start-match-btn mb-2">
                      <button className="btn btn-primary w-100">
                        Start Match
                      </button>
                    </div>
                    <div className="cancel-match-btn mb-2">
                      <button
                        onClick={() => navigate(-1)}
                        className="btn btn-outline-secondary w-100"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 1 Add team */}
          <div className="carousel-item">
            <SelectTeam />
          </div>
          {/* 2 Select squad */}
          <div className="carousel-item">
            <SelectSquad />
          </div>
          {/* 3 Add new team */}
          <div className="carousel-item">
            <AddNewTeam />
          </div>
          {/* 4  */}
          <div className="carousel-item"></div>
        </div>
      </div>
    </div>
  );
};

export default ChooseTeams;
