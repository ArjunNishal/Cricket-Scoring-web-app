import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = () => {
  return (
    <section className=" home-cta ">
      <div className="container p-5">
        <div className="p-5  text-center home-cta-box rounded-3">
          <img
            className="bi mt-4 mb-3"
            style={{ color: "var(--bs-indigo)" }}
            src="assets/images/logo.png"
            height={100}
          ></img>
          <h1 className="text-body-emphasis">Stop all Fights</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            Make teams of your own size and play against any team with any
            number of players
          </p>
          <div className="d-inline-flex gap-2 mb-5">
            <Link
              className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
              to="/match"
            >
              Let's Go
            </Link>
            {/* <button
            className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
            type="button"
          >
            Secondary link
          </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
