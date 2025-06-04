import React from "react";
import { Arrow } from "../assets/css/components/arrow";
import { DemoLink } from "../components/demo-link";
import { PagesContent, PagesData, Projects } from "../pages-data";

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
          {demoLink && <DemoLink link={demoLink} />}
        </div>

        {!!mainSection.images?.length && (
          <div className="two-imgs">
            {mainSection.images.map((src, i) => (
              <img src={src} alt={alt} key={i} />
            ))}
          </div>
        )}

        <div>
          {mainSection.moreParagraphs?.map((p, i) => (
            <React.Fragment key={i}>{p}</React.Fragment>
          ))}
        </div>

        <ProjectEndNav from={project} />
      </section>
    </div>
  );
};

const ProjectEndNav = ({ from }: { from: string }) => {
  const index = Projects.findIndex((mp) => mp === from);
  const next = Projects[index + 1] || Projects[0];
  const prev = Projects[index - 1] || Projects[Projects.length - 1];
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
