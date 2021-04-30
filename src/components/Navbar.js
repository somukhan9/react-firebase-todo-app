import React from "react";
import Login from "./Login";
// CSS
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo">
            <p>MunchKin TODO</p>
          </div>
          <div className="navbar__right">
            <div className="navabar__loginBtnCOntainer">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
