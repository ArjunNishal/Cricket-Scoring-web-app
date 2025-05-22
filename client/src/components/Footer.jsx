import React from "react";
import pagelinks from "../config/pagelinks.json";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="">
      <div className="container border-top">
        <div className="py-5">
          <div className="row">
            <div className="col-12 col-lg-8 text-center">
              <img
                src="assets/images/logo.webp"
                className="footer-logo"
                alt="logo"
              />
              <h3 className="custom-def">गली Cricket</h3>
            </div>
            <div className="col-12 col-lg-4 mb-3 text-lg-start text-center">
              <h5>Links</h5>
              <ul className="nav flex-column ">
                {pagelinks.map((el, index) => {
                  return (
                    <li
                      key={index}
                      className="nav-item mb-2"
                    >
                      <Link
                        to={`${el.link}`}
                        className="nav-link custom-def p-0 "
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
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 border-top">
            <p className="text-lg-start text-center">
              © 2025 गली Cricket, Inc. All rights reserved.
            </p>
            <ul className="list-unstyled d-flex justify-content-lg-start justify-content-center">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <i class="fa-brands fa-square-x-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
