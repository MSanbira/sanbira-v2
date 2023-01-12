import React from "react";
import { PageContent } from "../../pages-data";
import extensions1 from "../../assets/images/extensions/extensions1.jpeg";
import extensions2 from "../../assets/images/extensions/extensions2.png";
import extensions3 from "../../assets/images/extensions/extensions3.png";
import { DemoLink } from "../../components/demo-link";

export const ExtensionsContent = {
  topSection: {
    title: "Chrome Extensions",
    tldr: `Active Chrome extensions I did for work and for fun.`,
    image: extensions1,
  },
  mainSection: {
    paragraphs: [
      <>
        <h3>Clicks of Unicorns 🦄</h3>
        <p>
          A fun and simple Chrome extension that shoots emojis from the user's
          cursor when clicked. the extension uses vanilla js and CSS to find the
          location of the mouse when clicked, inserting emoji divs with random
          trajectories, and removing them after the animation ends. The
          extension is slim enough so it doesn't effect the performance, and
          uses a popup for emoji selection.
        </p>
        <DemoLink link="https://chrome.google.com/webstore/detail/clicks-of-unicorns-%F0%9F%A6%84/bclbdlhdaojndadgaebpcddkpfheljbp" />
      </>,
      <>
        <h3>Emoji Catcher</h3>
        <p>
          A game-like extension that pops an emoji every few minutes in a random
          place, when clicked adds the emoji to the user's collection and awards
          points. the number of points and rarity are different between each
          emoji. the user can see his progress in the extension's popup. The
          extension uses Chrome storage API with a background script that
          manages the timing and actions.
        </p>
        <DemoLink link="https://chrome.google.com/webstore/detail/emoji-catcher/jbbmffejmaheleofjaefpfcojebpflhf" />
      </>,
      <>
        <h3>Loadmill Test Composer</h3>
        <p>
          A dev tools app that allows users to record API and WebSocket requests
          and create a test in the Loadmill web app. As a Loadmill front-end
          lead, I gave the app a new look and changed the architecture. Because
          different users use their dev tools window in different ways the app
          is fully responsive.
        </p>
        <DemoLink link="https://chrome.google.com/webstore/detail/loadmill-test-composer/gdkmnfehipofdefhpegbgkkocinlaofd" />
      </>,
    ],
    images: [extensions2, extensions3],
  },
} as PageContent;

export {};
