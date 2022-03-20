import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Link className="logo-container" to={"/"}>
        <img className="logo" src="/img/logo.png" alt="" />
      </Link>
      <div className="avatar-container">
        <img src="/img/cat.png" alt="" className="avatar" />
      </div>
    </header>
  );
};

export default Header;
