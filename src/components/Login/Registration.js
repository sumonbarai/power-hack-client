import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const handleRegisration = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const userInformation = {
      name: e.target.email.value,
      password: password,
    };
    if (password === confirmPassword) {
    }
  };
  return (
    <div className="login-area">
      <div className="container">
        <div className="login-form">
          <form onSubmit={handleRegisration}>
            <h2>Please Registration</h2>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword"
                name="password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword12" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword12"
                name="confirmPassword"
              />
            </div>
            <p>
              All ready have an account
              <Link to="/login"> Login</Link>
            </p>
            <button type="submit" className="btn btn-primary">
              Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
