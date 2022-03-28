import React from "react";
import signOutUser from "../../services/util-functions/sign-out-user";
import useUser from "./../../hooks/useUser";
import ToggleSwitch from "./../common/toggle-switcher/toggle-switch.component";
import "./util-dropdown.styles.scss";

const UtilDropDown = ({ user, theme, setTheme }) => {
  const { chageTheme } = useUser();
  const id = user?._id;

  return (
    <div className="util-dropdown">
      <section className="user-section">
        <div className="avatar-container">
          {user ? (
            <img
              className="user-avatar"
              src={`/img/${user?.avatar}.png`}
              alt=""
            />
          ) : (
            <span>?</span>
          )}
        </div>
        <span className="user-name">{user?.userName}</span>
      </section>
      <div className="util-item">
        <div className="theme-changer">
          Dark Theme
          <ToggleSwitch
            checked={theme}
            onChange={() => {
              if (user) {
                return chageTheme(id);
              }

              setTheme(!theme);
            }}
          />
        </div>
      </div>
      {user ? (
        <React.Fragment>
          <div className="util-item">Archived Events</div>
          <div onClick={signOutUser} className="util-item">
            Sign Out
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default UtilDropDown;
