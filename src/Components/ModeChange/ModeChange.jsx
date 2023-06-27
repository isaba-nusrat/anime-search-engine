import React from "react";
import { ReactComponent as Sun } from "../../assets/images/Sun.svg";
import { ReactComponent as Moon } from "../../assets/images/Moon.svg";
import "./ModeChange.scss";

const ModeChange = () => {
  return (
    <div className="dark_mode">
      <input className="dark_mode_input" type="checkbox" id="darkmode-toggle" />
      <label className="dark_mode_label" for="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default ModeChange;
