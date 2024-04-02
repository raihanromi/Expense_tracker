import React from "react";
import "./register.css";
const Register = () => {
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
            <input type="text"  placeholder="Name"/>
            <input type="text"  placeholder="Email"/>
            <input type="password"  placeholder="Enter Password"/>
        </div>
      </div>
    </div>
  );
};

export default Register;
