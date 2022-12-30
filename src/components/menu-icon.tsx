import React from "react";

export const MenuIcon = (props: { onClick: () => void }) => (
  <div className="menu-icon" onClick={props.onClick}>
    <span />
    <span />
    <span />
  </div>
);
