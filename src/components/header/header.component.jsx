import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = ({ state, setState, avatar }) => {
  return (
    <header className="header">
      <Link className="logo-container" to={"/"}>
        <img className="logo" src="/img/logo.png" alt="" />
      </Link>
      <div onClick={() => setState(!state)} className="avatar-container">
        {avatar ? (
          <img src={`/img/${avatar}.png`} alt="" className="avatar" />
        ) : (
          <span>?</span>
        )}
      </div>
    </header>
  );
};

export default Header;
