import React from "react";

import { Link } from "react-router-dom";

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
                <li data-aos="fade-left">
                  <Link to="/" className="nav-link px-2">
                    <img src="assets/icons/wicket.png" alt="" /> Start Match
                  </Link>
                </li>
                <li data-aos="fade-left">
                  <Link to="/" className="nav-link px-2">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            {/* login btns */}
            <div className="d-lg-block d-none">
              <Link to={"/login"} className="btn btn-outline-primary ">
                Login
              </Link>
              <Link to={"/login"} className="btn btn-primary mx-2">
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
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
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
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex mt-3" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
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
