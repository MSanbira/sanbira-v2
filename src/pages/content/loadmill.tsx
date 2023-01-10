import React from "react";
import { PageContent } from "../../pages-data";
import reqEditor from "../../assets/images/loadmill/req-editor.png";
import recAndJsonPath from "../../assets/images/loadmill/rec-and-json-path.png";
import loadmillCom from "../../assets/images/loadmill/loadmill-com.png";

export const LoadmillContent = {
  topSection: {
    title: "Loadmill",
    tldr: `A behavioral and load testing app, 
        using API requests to better a company’s deployment pipeline.`,
    image: reqEditor,
  },
  mainSection: {
    paragraphs: [
      <>
        Loadmill uses a web app for creating, editing, and running tests, and a
        Chrome extension app to record live API requests to create tests for
        realistic user flow.
      </>,
      <>
        As a lead Frontend, I took the MVP app and made it look more
        professional and consistent. Overhauling the main navigation, the main
        test editor, and settings. Adapting big components for scalability and
        ease of adding new features. Reworking the app’s CSS to work with @layer
        for better styling control. Mentoring two junior developers in all
        things Frontend. Also creating new custom features like:
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
