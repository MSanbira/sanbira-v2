import React from "react";
import { className } from "../utils";
import { MenuIcon } from "./menu-icon";

export const Header = (props: {
  toggleMenuOpen: () => void;
  isMock?: boolean;
}) => {
  return (
    <header className={className({ "is-mock": !!props.isMock })}>
      <MenuIcon onClick={props.toggleMenuOpen} />
      <h1>
        <a href='/' className="semi-bold-weight my-name">Matan Sanbira</a>{" "}
        <span className="hide-on-mobile"> - </span>
        {"\n"}Senior Frontend Dev
      </h1>
    </header>
  );
};
