import React from "react";
import { useNavigate } from "react-router-dom";

const CreateNewTeamForm = ({ startmatch }) => {
  const navigate = useNavigate("");
  return (
    <div className="create-new-team-form-wrapper">
      <div className="create-new-team-form-inner">
        {/* <div className="h4 text-center py-3">Create New Team</div> */}
        <form  className="create-team-form py-3">
          <div className="row mx-0">
            {/* <div className="col-12 mb-2">
              <div className="h5 text-center">Enter Team Details</div>
            </div> */}
            <div className="col-12">
              <div className="mb-2">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control form-input-add-new-team shadow-none"
                    id="floatingInput"
                    placeholder="Team Name"
                  />
                  <label htmlFor="floatingInput">Team Name</label>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-2">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control form-input-add-new-team shadow-none"
                    id="floatingInput"
                    placeholder="City/Town"
                  />
                  <label htmlFor="floatingInput">City/Town</label>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Add me in the team
                </label>
              </div>
            </div>
            <div className="col-12">
              {startmatch === true ? (
                <>
                  <button
                    // type="submit"
                    onClick={() => navigate("/team-created")}
                    // data-bs-target="#startmatchCarousel"
                    // data-bs-slide-to="0"
                    className="btn w-100 btn-block add-new-team-btn"
                  >
                    Create Team
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="submit"
                    className="btn w-100 btn-block add-new-team-btn"
                  >
                    Create Team
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewTeamForm;
