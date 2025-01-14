import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-lg-5 py-2">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-sm text-body-emphasis mb-3">
              Become a <br />{" "}
              <span className="text-primary pt-3">गली Cricketer</span>
            </h1>
            <p className="col-lg-10 fs-4 d-lg-block d-none">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 register-form p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control shadow-none"
                  id="floatingUsername"
                  placeholder="user@_123"
                  required
                />
                <label htmlFor="floatingUsername">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control shadow-none"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  required
                  className="form-control shadow-none"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              {/* <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember
                  me
                </label>
              </div> */}
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign up
              </button>
              <hr className="my-4" />
              <div className="text-center">
                <small className="text-body-secondary">
                  Already have an account?&nbsp;
                </small>
                <Link className="text-decoration-none" to={`/login`}>
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
