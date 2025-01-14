import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              <small className="">Login to your</small> <br />
              <span className="text-primary">Dressing room</span>
            </h1>
            <p className="col-lg-10 fs-4 d-lg-block d-none">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 login-form p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Email / Username"
                  required
                />
                <label htmlFor="floatingInput">Email / Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember
                  me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Login
              </button>
              <hr className="my-4" />
              <div className="text-center">
                <small className="text-body-secondary">
                  Don't have an account?&nbsp;
                </small>
                <Link className="text-decoration-none" to={`/register`}>
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
