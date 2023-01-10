import React from "react";
import { PageContent } from "../../pages-data";
import alona1 from "../../assets/images/alona/alona1.png";
import alona2 from "../../assets/images/alona/alona2.jpg";
import alona3 from "../../assets/images/alona/alona3.png";

export const AlonaContent = {
  topSection: {
    title: "Alona.Design",
    tldr: `A product designer custom portfolio for Alona Sanbira`,
    image: alona1,
  },
  mainSection: {
    paragraphs: [
      <>
        When Alona needed a new portfolio after 4 years of experience we decided
        to collaborate and make it together. The process was that Alona will
        design a desktop and mobile site from scratch without any restriction so
        she can show her talent with the site experience and look as with the
        project pages.
      </>,
      <>
        Developing a non-compromise site for a product designer meant that I
        needed to use all my CSS skills. I also decided not to use any CSS
        framework so I can use this project as a learning exercise to better my
        skills. I used React for routing and repeating components and Heroku for
        hosting.
      </>,
      <>
        One of my challenges was developing a responsive image carousel, which I
        used scroll snap and grid properties for. And fully custom buttons with
        hover states and :before and :after so the markup will only need a
        button element for it.
      </>,
    ],
    images: [alona3, alona2],
  },
  demoLink: "https://alona.design",
} as PageContent;

export {};
