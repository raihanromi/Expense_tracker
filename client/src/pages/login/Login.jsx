import React from "react";

const Login = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <div className="leftLogo">Expense Tracker</div>
          <div className="leftDesc">
            Track your daily expenses through the app.
          </div>
        </div>
        <div className="registerRight">
          <form className="registerBox">
            <input
              type="text"
              placeholder="Enter Email"
              className="registerInput"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="registerInput"
            />
            <button className="registerBtn">Create new account</button>
            <button type="submit" className="registerBtn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
