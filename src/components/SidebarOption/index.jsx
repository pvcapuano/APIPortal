import React from "react";
import "./SidebarOptions.css";

const SidebarOption = ({ active, text, Icon }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <div className="icon">
        <Icon />
      </div>

      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
