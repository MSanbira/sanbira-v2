import React from "react";
import { Projects } from "../pages-data";
import { ExternalLinksSection } from "./external-links-section";
import { Header } from "./header";
import { MenuIcon } from "./menu-icon";
import { ProjectNavButton } from "./project-nav-button";

export const MainNav = (props: { toggleMenuOpen: () => void }) => {
  return (
    <>
      <div className="main-nav-shadow" onClick={props.toggleMenuOpen} />
      <div className="main-nav">
        <Header isMock toggleMenuOpen={() => {}} />
        <div className="show-on-mobile-flex d-flex-jc-center">
          <MenuIcon onClick={props.toggleMenuOpen} />
        </div>
        <h3>Projects</h3>
        {Projects.map((project) => (
          <ProjectNavButton
            key={project}
            project={project}
            toggleMenuOpen={props.toggleMenuOpen}
          />
        ))}
        <h3>Get in touch</h3>
        <ExternalLinksSection />

        <a
          href={process.env.PUBLIC_URL + "/matan-sanbira-cv.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>
      </div>
    </>
  );
};
