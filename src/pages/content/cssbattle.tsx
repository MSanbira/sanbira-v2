import React from "react";
import { PageContent } from "../../pages-data";
import cssbattle1 from "../../assets/images/cssbattle/cssbattle1.png";
import cssbattle2 from "../../assets/images/cssbattle/cssbattle2.png";
import cssbattle3 from "../../assets/images/cssbattle/cssbattle3.png";
import { DemoLink } from "../../components/demo-link";

export const CssBattleContent = {
  topSection: {
    title: "CSS Battle",
    tldr: `A top competitor in a CSS golf-like live tournament.`,
    image: cssbattle1,
  },
  mainSection: {
    paragraphs: [
      <>
        <p>
          Since the first battle in 2019 I am an active competitor in CSS
          Battle, where the point is to create different shapes with the least
          amount of CSS and HTML. in the process I learned many new CSS
          properties, how they work, and what are their limits. At my best, I
          ranked 10th, but most of the time I am placed in the top 25.
        </p>
        <DemoLink link="https://cssbattle.dev/player/m_sanbira" />
      </>,
      <>
        <p>
          At the end of 2022, I started a challenge for myself - writing as many
          targets as I can using only gradients. Currently, I made 69 targets
          out of 140.
        </p>
        <DemoLink link="https://github.com/MSanbira/css_battle_only_gradients" />
      </>,
    ],
    images: [cssbattle2, cssbattle3],
  },
} as PageContent;

export {};
