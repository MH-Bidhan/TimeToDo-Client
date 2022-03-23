import React, { useContext } from "react";
import { PageContext } from "./../root/root.component";
import "./navbar.styles.scss";

const NavItem = ({ label, pageId }) => {
  const { page, setPage } = useContext(PageContext);
  const active = pageId === page;

  return (
    <div
      onClick={() => setPage(pageId)}
      className={`nav-item ${active ? "active" : ""}`}
    >
      {label}
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavItem label={"upcoming events"} pageId="homePage" />
      <NavItem label={"Past Events"} pageId="pastEventPage" />
    </nav>
  );
};

export default NavBar;
