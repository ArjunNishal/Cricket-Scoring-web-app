import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section data-aos="fade-up" className="container px-4">
      <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
        <div className="col-12 col-sm-12 col-lg-6">
          <img
            src="assets/images/ballsketch.png"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-3 fw-bold text-body-emphasis lh-sm text-lg-start text-center mb-3">
            Welcome to <br /> <span className="text-primary">गली Cricket!</span>
          </h1>
          <p className="lead text-lg-start text-center">
            Quickly design gello and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link
              to="/match"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Let's Play
            </Link>
            <Link
              to="/match-center"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Match Center
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
