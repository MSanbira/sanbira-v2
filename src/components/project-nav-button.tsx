import React from "react";
import { PagesData } from "../pages-data";

export const ProjectNavButton = (props: { project: string, toggleMenuOpen: () => void }) => {
  const { project, toggleMenuOpen } = props;
  const { title } = PagesData[project];

  return (
    <a href={"/" + project} className="project-nav-btn" onClick={toggleMenuOpen}>
      {title}
    </a>
  );
};
