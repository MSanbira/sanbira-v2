import React from "react";

export const DemoLink = (props: { link: string }) => (
  <a
    href={props.link}
    target="_blank"
    rel="noreferrer"
    className="demo-link bold-weight"
  >
    See Live Project
  </a>
);
