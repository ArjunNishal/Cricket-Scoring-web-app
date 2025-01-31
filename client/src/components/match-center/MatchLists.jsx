import React, { useState } from "react";
import LiveMatches from "./LiveMatches";

const MatchLists = () => {
  // tabs =============================

  const [activeTab, setActiveTab] = useState("live");

  // ==================================
  return (
    <div className="match-list-main-wrapper">
      <div className="container py-3">
        <div className="match-list-tabs">
          <div>
            <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "today" && "active"}`}
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                  onClick={() => setActiveTab("today")}
                >
                  Today's{" "}
                  <span className="d-lg-inline-block d-none">Matches</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "live" && "active"}`}
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                  onClick={() => setActiveTab("live")}
                >
                  <span class="badge rounded-pill text-bg-danger">Live</span>{" "}
                  <span className="d-lg-inline-block d-none">Matches</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "yesterday" && "active"
                  }`}
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                  onClick={() => setActiveTab("yesterday")}
                >
                  Yesterday's{" "}
                  <span className="d-lg-inline-block d-none">Matches</span>
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className={`tab-pane fade  ${
                  activeTab === "live" && "show active"
                }`}
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex={0}
              >
                <LiveMatches />
              </div>
              <div
                className={`tab-pane fade  ${
                  activeTab === "today" && "active show"
                }`}
                // className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex={0}
              >
                <LiveMatches />
              </div>
              <div
                className={`tab-pane fade  ${
                  activeTab === "yesterday" && "active show"
                }`}
                // className="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabIndex={0}
              >
                <LiveMatches />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchLists;
