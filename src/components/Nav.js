import React from "react";
import filmimg from "./assets/images/filmimg.png";

const Nav = (props) => {
  return (
    <nav>
      <div className="nav-wrapper container">
        <div className="logo-wrapper">
          <div className="nav-logo">
            <img src={filmimg} alt="Search movie app" />{" "}
          </div>{" "}
          <div className="heading">
            {" "}
            <b>{props.text}</b>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
