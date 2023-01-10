import React from "react";
import { PageContent } from "../../pages-data";
import reqEditor from "../../assets/images/loadmill/req-editor.png";
import recAndJsonPath from "../../assets/images/loadmill/rec-and-json-path.png";
import loadmillCom from "../../assets/images/loadmill/loadmill-com.png";

export const LoadmillContent = {
  topSection: {
    title: "Loadmill",
    tldr: `A behavioral and load testing app, 
        using API requests to streamline a company’s deployment pipeline.`,
    image: reqEditor,
  },
  mainSection: {
    paragraphs: [
      <p>
        Loadmill uses a web app for creating, editing, and running tests, and a
        Chrome extension app to record live API requests to create tests for
        realistic user flows.
      </p>,
      <p>
        As lead front end I redesigned the MVP’s architecture, evolving it into
        a scalable, consistent and functional product. Overhauling the main
        navigation, the main test editor, and settings. Adapting major
        components to be both efficient and scalable - in an effort to
        future-proof the product. Reworking the app’s CSS to work with @layer
        for better styling control. While I shouldered the majority of design
        and implementation for the product’s front end, I also mentored the
        company’s junior developers in all things front end.
      </p>,
      <>
        <p style={{marginBottom: 0}}>Some challenging custom features and solutions I worked on:</p>
        <ul>
          <li>JSON path viewer - using recursive components.</li>
          <li>
            Generic tables - using CSS grid and with capabilities like paging,
            actions, filtering, and ordering.
          </li>
          <li>
            Resizing window sections - using event listeners within React and
            calculated CSS values.
          </li>
        </ul>
      </>,
    ],
    images: [loadmillCom, recAndJsonPath],
  },
  demoLink: "https://app.loadmill.com",
} as PageContent;

export {};
