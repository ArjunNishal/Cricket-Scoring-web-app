import React from "react";

import { Link } from "react-router-dom";

import pagelinks from "../config/pagelinks.json";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar  ">
          <div className="container-fluid justify-content-between ">
            {/* navbar brand */}
            <Link className="navbar-brand d-flex" to="/">
              <img
                src="assets/images/logo.png"
                className="nav-logo"
                alt="logo"
              />
              <h3>गली Cricket</h3>
            </Link>
            {/* Header links */}
            <div className="d-lg-block d-none">
              <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                {pagelinks.map((el, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={`${el.link}`}
                        className="nav-link custom-def px-2 "
                      >
                        {el.image.src ? (
                          <img
                            src={`${el.image.src}`}
                            alt={`${el.image.alt}`}
                          />
                        ) : (
                          ""
                        )}
                        {el.name}
                      </Link>
                    </li>
                  );
                })}
                {/* <li data-aos="fade-left">
                  <Link to="/" className="nav-link px-2">
                    Home
                  </Link>
                </li> */}
              </ul>
            </div>
            {/* login btns */}
            <div className="d-lg-block d-none">
              <Link to={"/login"} className="btn btn-outline-primary ">
                Login
              </Link>
              <Link to={"/register"} className="btn btn-primary mx-2">
                Sign-up
              </Link>
            </div>
            {/* offcanvas btn */}
            <button
              className="navbar-toggler d-lg-none d-block"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* offcanvas */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              data-bs-scroll="true"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <Link className="navbar-brand d-flex" to="/">
                    <img
                      src="assets/images/logo.png"
                      className="nav-logo"
                      alt="logo"
                    />
                    <h3>गली Cricket</h3>
                  </Link>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  {pagelinks.map((el, index) => {
                    return (
                      <li className="nav-item" key={index}>
                        <Link
                          to={`${el.link}`}
                          className="nav-link text-center fw-medium custom-def"
                        >
                          {el.image.src ? (
                            <img
                              src={`${el.image.src}`}
                              alt={`${el.image.alt}`}
                            />
                          ) : (
                            ""
                          )}
                          {el.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="text-center py-5">
                  <Link to={"/login"} className="btn btn-outline-primary me-2 ">
                    Login
                  </Link>
                  <Link to={"/register"} className="btn btn-primary ml-2">
                    Sign-up
                  </Link>
                </div>
              </div>
            </div>
            {/* ========================= */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
