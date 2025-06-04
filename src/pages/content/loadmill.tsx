import React from "react";
import { PageContent } from "../../pages-data";
import reqEditor from "../../assets/images/loadmill/req-editor.png";
import recAndJsonPath from "../../assets/images/loadmill/rec-and-json-path.png";
import loadmillCom from "../../assets/images/loadmill/loadmill-com.png";
import { DemoLink } from "../../components/demo-link";

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
        Loadmill uses a web app for creating, editing, and running tests, and a Chrome extension app to record live API
        requests to create tests for realistic user flows.
      </p>,
      <p>
        As lead front end I redesigned the MVP’s architecture, evolving it into a scalable, consistent and functional
        product. Overhauling the main navigation, the main test editor, and settings. Adapting major components to be
        both efficient and scalable - in an effort to future-proof the product. Reworking the app’s CSS to work with
        @layer for better styling control. While I shouldered the majority of design and implementation for the
        product’s front end, I also mentored the company’s junior developers in all things front end.
      </p>,
      <>
        <p style={{ marginBottom: 0 }}>Some challenging custom features and solutions I worked on:</p>
        <ul>
          <li>JSON path viewer - using recursive components.</li>
          <li>Generic tables - using CSS grid and with capabilities like paging, actions, filtering, and ordering.</li>
          <li>Resizing window sections - using event listeners within React and calculated CSS values.</li>
        </ul>
        <DemoLink link="https://app.loadmill.com" />
      </>,
      <>
        <h3>Loadmill Test Composer</h3>
        <p>
          A dev tools app that allows users to record API and WebSocket requests and create a test in the Loadmill web
          app. As a Loadmill front-end lead, I gave the app a new look and changed the architecture. Because different
          users use their dev tools window in different ways the app is fully responsive.
        </p>
        <DemoLink link="https://chrome.google.com/webstore/detail/loadmill-test-composer/gdkmnfehipofdefhpegbgkkocinlaofd" />
      </>,
    ],
    images: [loadmillCom, recAndJsonPath],
  },
} as PageContent;

export {};
