import React from "react";
import { Arrow } from "../assets/css/components/arrow";
import { MainProjects } from "../components/main-content";
import { PagesContent, PagesData } from "../pages-data";

export const ProjectPage = (props: { project: string }) => {
  const { project } = props;

  const { topSection, mainSection, demoLink } = PagesContent[project];
  const alt = project + " demo image";
  return (
    <div className="project-page-wrapper">
      <section>
        <div>
          <h1>{topSection.title}</h1>
          <h2>{topSection.tldr}</h2>
        </div>

        <img src={topSection.image} alt={alt} />
      </section>
      <section>
        <div>
          {mainSection.paragraphs.map((p, i) => (
            <React.Fragment key={i}>{p}</React.Fragment>
          ))}
          {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="demo-link bold-weight"
          >
            See Live Project
          </a>
        )}
        </div>
        <div className="two-imgs">
          {mainSection.images.map((src, i) => (
            <img src={src} alt={alt} key={i} />
          ))}
        </div>
        
        <ProjectEndNav from={project} />
      </section>
    </div>
  );
};

const ProjectEndNav = ({ from }: { from: string }) => {
  const index = MainProjects.findIndex((mp) => mp === from);
  const next = MainProjects[index + 1] || MainProjects[0];
  const prev = MainProjects[index - 1] || MainProjects[MainProjects.length - 1];
  return (
    <div className="project-end-nav d-flex-ali-center-xl-gap">
      <a className="d-flex-dir-col-ali-start-md-gap" href={"/" + prev}>
        <Arrow />
        <h3>{PagesData[prev].title}</h3>
      </a>
      <a className="d-flex-dir-col-ali-end-md-gap" href={"/" + next}>
        <Arrow />
        <h3>{PagesData[next].title}</h3>
      </a>
    </div>
  );
};
