import React from "react";
import { PageContent } from "../../pages-data";
import reqEditor from "../../assets/images/loadmill/req-editor.png";
import recAndJsonPath from "../../assets/images/loadmill/rec-and-json-path.png";
import loadmillCom from "../../assets/images/loadmill/loadmill-com.png";
import { DemoLink } from "../../components/demo-link";

export const WorkContent = {
  topSection: {
    title: "Work",
    tldr: `The companies and products I helped build and shape as a developer.`,
    image: reqEditor,
  },
  mainSection: {
    paragraphs: [
      <>
        <h3>Loadmill</h3>
        <p>
          A behavioral and load testing app, using API requests to streamline a company’s deployment pipeline. Loadmill
          uses a web app for creating, editing, and running tests, and a Chrome extension app to record live API
          requests to create tests for realistic user flows.
        </p>
      </>,
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
    moreParagraphs: [
      <>
        <h3>MySize</h3>
        <p>
          A way to get your online shopping clothing size with phone measurements. MySize is an application that allows
          users to accurately measure themselves so they can shop online with confidence. The app uses advanced size
          calculation algorithm which is also connected to sizing databases from a variety of retailers. When I worked
          as MySize's first in-house full-stack developer they had a Vanilla widget that opened in the retailer product
          page with the user profile and size, a Shopify extension for retailers, algorithm dev team, iOS, and Android
          apps.
        </p>
      </>,
      <p>
        As a full-stack developer, I used Ruby on Rails, to manage the Postgres database for all the apps, and
        server-side rendering for the Shopify extension. I also used Vanilla Javascript, HTML, and CSS to create a
        customizable, Lightweight and efficient widget, taking performance requirements into account. In the widget app
        a user could also sign in via Firebase and give a quick size solution using only height and weight.
      </p>,
      <>
        <p>
          One of my challenges was writing a new size-calculating algorithm with the user's measurements, garment
          measurements, math formulas, and preferences. Not only did it need to give the right or closest size every
          time, but by using caching and smart database inquiring I successfully lowered the run time to less than a
          second consistently.
        </p>
        <DemoLink link="https://mysizeid.com" />
      </>,
    ],
  },
} as PageContent;

export {};
