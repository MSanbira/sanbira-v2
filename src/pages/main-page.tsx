import React from "react";
import { ProjectMainButton } from "../components/project-main-button";
import { Projects } from "../pages-data";

export const MainPage = () => {
  return (
    <div className="main-page-wrapper">
      {Projects.map((project) => (
        <ProjectMainButton key={project} project={project} />
      ))}
    </div>
  );
};
