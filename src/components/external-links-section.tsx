import React from "react";
import { ExternalLinks } from "../pages-data";

export const ExternalLinksSection = () => {
  return (
    <div className="external-links">
      {ExternalLinks.map(({ title, href }, i) => (
        <React.Fragment key={i}>
          <a
            href={href}
            className="external-link"
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
          {i === 2 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};
