import React from "react";
import "./SidebarOptions.css";

const SidebarOption = ({ text, Icon }) => {
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>option</h2>
    </div>
  );
};

export default SidebarOption;
