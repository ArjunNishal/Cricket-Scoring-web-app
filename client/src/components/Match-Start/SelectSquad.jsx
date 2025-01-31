import React from "react";

const SelectSquad = () => {
  return (
    <div className="select-squad-main">
      <div className="select-squad-inner">
        <div className="sticky-head-select-squad">
          <div className="select-squad-heading shadow-sm py-2 d-flex align-items-center justify-content-start">
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
        </div>
      </div>
    </div>
  );
};

export default SelectSquad;
