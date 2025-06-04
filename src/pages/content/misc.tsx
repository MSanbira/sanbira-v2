import React from "react";
import { PageContent } from "../../pages-data";
import main from "../../assets/images/misc/main.png";
import extensions1 from "../../assets/images/misc/extensions1.jpeg";
import sanbira from "../../assets/images/misc/sanbira-band.png";
import codepen from "../../assets/images/misc/codepen.png";
import props from "../../assets/images/misc/props100.png";
import h3 from "../../assets/images/misc/h3.png";
import working from "../../assets/images/misc/its-not-working.png";
import sanbiraCom from "../../assets/images/misc/sanbira-com.png";
import { DemoLink } from "../../components/demo-link";

export const MiscContent = {
  topSection: {
    title: "Misc",
    tldr: `All kinds of different projects I did along the way.`,
    image: main,
  },
  mainSection: {
    paragraphs: [
      <>
        <h3>Clicks of Unicorns 🦄</h3>
        <p>
          A fun and simple Chrome extension that shoots emojis from the user's cursor when clicked. the extension uses
          vanilla js and CSS to find the location of the mouse when clicked, inserting emoji divs with random
          trajectories, and removing them after the animation ends. The extension is slim enough so it doesn't effect
          the performance, and uses a popup for emoji selection.
        </p>
        <img src={extensions1} alt="Clicks of Unicorns" />
        <DemoLink link="https://chrome.google.com/webstore/detail/clicks-of-unicorns-%F0%9F%A6%84/bclbdlhdaojndadgaebpcddkpfheljbp" />
      </>,
      <>
        <h3>Sanbira.Band</h3>
        <p>
          A fully responsive band site that was made in under a month, from idea through design, development, revisions,
          and tests. The site was made with collaboration Alona Sanbira as a designer. Build with React, and Custom CSS,
          and to give editorial power to the band the site works with Contentful (CMS).
        </p>
        <img src={sanbira} alt="sanbira band" />
        <DemoLink link="https://www.sanbira.band" />
      </>,
      <>
        <h3>100 CSS properties</h3>
        <p>
          In 2022 I challenged myself to learn and create something with a different random CSS property every workday.
          The exercise was to learn about obscure properties and dive deeper into the more frequently used ones. At this
          point Jan 2023 I did more than 30 properties.
        </p>
        <img src={props} alt="100 css properties" />
        <DemoLink link="https://codepen.io/collection/Nqjerd" />
      </>,
    ],
    moreParagraphs: [
      <>
        <h3>Codepen challenges</h3>
        <p>
          When I had some extra time I made a pen for the Codepen challenges. In 2022 I made two pens and both of them
          were retweeted by the official Codepan twitter.
        </p>
        <img src={codepen} alt="codepen" />
        <DemoLink link="https://codepen.io/collection/pgavBE" />
      </>,
      <>
        <h3>H3 logo using only h3</h3>
        <p>
          A popular youtube channel named H3H3 production inspired me to recreate their logo using only an h3 HTML
          element. The CSS uses a lot of gradients and sudo elements with content. Works with any resolution and is
          centered.
        </p>
        <img src={h3} alt="h3 using h3" />
        <DemoLink link="https://codepen.io/MSanbira/pen/ExQWwbB" />
      </>,
      <>
        <h3>IT'S NOT WORKING!!!</h3>
        <p>
          A simple idea of a big button that you can spam-click to let out your rage as a developer. The small project
          was adopted as a marketing site for Loadmill's URL example merch.
        </p>
        <img src={working} alt="IT'S NOT WORKING" />
        <DemoLink link="https://www.blockchain-socks.xyz" />
      </>,
      <>
        <h3>Sanbira.Com</h3>
        <p>
          This portfolio site was created from scratch with the Design of Alona Sanbira. Making use of some of the
          newest CSS features like @layer, @property, and :has. Build with React, Typescript, and custom CSS. The site
          is fully responsive and hosted on Heroku.
        </p>
        <img src={sanbiraCom} alt="sanbira com" />
        <DemoLink link="https://github.com/MSanbira/sanbira-v2" />
      </>,
    ],
  },
} as PageContent;

export {};
