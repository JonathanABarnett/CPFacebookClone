import React from "react";
import "./SideBarRow.css";
import { Avatar } from "@material-ui/core";

const SideBarRow = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  );
};

export default SideBarRow;
