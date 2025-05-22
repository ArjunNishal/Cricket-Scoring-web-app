import React from "react";
import { Link } from "react-router-dom";
import ChooseTeamCard from "./ChooseTeamCard";

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
    "chennai super kings",
    "pune",
    "asdasdaa",
    "sad asddda daa d ad a",
    "chennai super kings",
    "pune",
    "asdasdaa",
    "sad asddda daa d ad a",
    "chennai super kings",
    "pune",
    "asdasdaa",
    "sad asddda daa d ad a",
    "chennai super kings",
    "pune",
    "asdasdaa",
    "sad asddda daa d ad a",
    "chennai super kings",
    "pune",
    "asdasdaa",
    "sad asddda daa d ad a",
    "chennai super kings",
    "pune",
    "asdasdaa",
    "sad asddda daa d ad a",
    "chennai super kings",
    "pune",
    "asdasdaa",
    "sad asddda daa d ad a",
  ];
  return (
    <div className="select-team-main row mx-0 justify-content-center align-items-center">
      <div className="select-team-wrapper col-md-10 col-12 pt-5">
        <div className="sticky-head-select-team">
          {/* <div className="select-team-heading shadow-sm py-2 d-flex align-items-center justify-content-start">
            <div className="back-btn">
              <Link to={"/match"} className="btn">
                <i class="fa-solid fa-chevron-left"></i>
              </Link>
            </div>
            <div className="h4 mb-0">Choose Team</div>
          </div> */}

          <div className="search-team-form-main">
            <div className="search-team-form align-items-center justify-content-center row mx-0">
              {" "}
              <div className="col-12 col-md-4">
                <div className="mb-2 mb-md-0">
                  <div className="input-group search-team-input-group ">
                    <span className="input-group-text" id="basic-addon1">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </span>{" "}
                    <input
                      type="text"
                      className="form-control search-team-input"
                      placeholder="Search Team Name"
                      aria-label="Search Team Name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12 text-center">
                <Link
                  to={"/add-new-team"}
                  className="add-new-team-btn btn rounded-pill"
                >
                  <i class="fa-solid fa-plus"></i> Add New Team
                </Link>
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
                      <>
                        <ChooseTeamCard el={el} index={index} />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="add-new-team-modal-btn"></div> */}
        {/* add new team modal */}
      </div>
    </div>
  );
};

export default SelectTeam;
