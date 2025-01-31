import React from "react";
import { Link } from "react-router-dom";

const SelectTeam = () => {
  const teams = [
    "rcb",
    "Gladiators",
    "chennai super kings",
    "pune",
    "asdasdaa",
    "sad asddda daa d ad a",
    "rcb",
    "Gladiators",
    "chennai super kings",
    "pune",
    "asdasdaa",
    "sad asddda daa d ad a",
    "rcb",
    "Gladiators",
    "chennai super kings",
    "pune",
    "asdasdaa",
    "sad asddda daa d ad a",
  ];
  return (
    <div className="select-team-main">
      <div className="select-team-wrapper">
        <div className="sticky-head-select-team">
          <div className="select-team-heading shadow-sm py-2 d-flex align-items-center justify-content-start">
            <div className="back-btn">
              <button
                data-bs-target="#startmatchCarousel"
                data-bs-slide-to="0"
                className="btn"
              >
                <i class="fa-solid fa-chevron-left"></i>
              </button>
            </div>
            <div className="h4 mb-0">Choose Team</div>
          </div>

          <div className="search-team-form-main">
            <div className="search-team-form">
              {" "}
              <div className="col-12">
                <div className="my-2">
                  <div className="input-group search-team-input-group mb-3">
                    <input
                      type="text"
                      className="form-control search-team-input"
                      placeholder="Search Team Name"
                      aria-label="Search Team Name"
                    />
                    <span className="input-group-text" id="basic-addon1">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-team">
          <div className="row mx-0">
            <div className="col-12 py-3">
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>

            <div className="col-12 pt-4 px-0">
              <div className="searched-teams-list ">
                <div className="row teams-list-items mx-0">
                  {teams.map((el, index) => {
                    return (
                      <div key={index} className="col-4 col-sm-3 mb-2">
                        <Link
                          to={""}
                          data-bs-target="#startmatchCarousel"
                          data-bs-slide-to="2"
                          className="searched-team-item rounded shadow-sm text-center"
                        >
                          <div className="">
                            <img
                              className="searched-team-item-img"
                              src="assets/images/teamA.png"
                              alt="Team logo"
                            />
                            <p className="px-1">{el}</p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="add-new-team-modal-btn">
          <button
            type="button"
            data-bs-target="#startmatchCarousel"
            data-bs-slide-to="3"
            className="btn btn-success"
          >
            <i class="fa-solid fa-plus"></i> Add New Team
          </button>
        </div>
        {/* add new team modal */}
      </div>
    </div>
  );
};

export default SelectTeam;
