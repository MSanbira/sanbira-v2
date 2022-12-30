import React, { CSSProperties, useLayoutEffect, useRef, useState } from "react";
import { PagesData } from "../pages-data";

export const ProjectMainButton = (props: { project: string }) => {
  const { project } = props;
  const { title, startPlace } = PagesData[project];

  const [titleWidth, setTitleWidth] = useState<number>(0);

  let titleNum = 10;
  if (titleWidth) {
    titleNum = Math.ceil((window.innerWidth + startPlace) / titleWidth) + 5;
  }
  const btnText = [];
  for (let i = 0; i < titleNum; i++) {
    btnText.push(<span key={i + title}>{title}</span>);
  }

  const btnNode = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    setTitleWidth(btnNode.current?.querySelector("span")?.offsetWidth || 0);
  }, []);

  return (
    <a
      className="project-main-btn"
      href={"/" + project}
      style={
        {
          "--rand-place": -1 * startPlace + "px",
          "--e-width": titleWidth,
        } as CSSProperties
      }
      ref={btnNode}
    >
      {btnText}
    </a>
  );
};
