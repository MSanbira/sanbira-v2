import React from "react";
import { PageContent } from "../../pages-data";
import alona1 from "../../assets/images/alona/alona1.png";
import alona2 from "../../assets/images/alona/alona2.jpg";
import alona3 from "../../assets/images/alona/alona3.png";

export const AlonaContent = {
  topSection: {
    title: "Alona.Design",
    tldr: `A custom portfolio site for a product designer, giving the designer full artistic freedom.`,
    image: alona1,
  },
  mainSection: {
    paragraphs: [
      <p>
        When designer Alona Sanbira, who is also my partner, needed a new
        portfolio site - we decided to collaborate and create it together. I
        gave Alona full creative and artistic freedom in designing both web and
        mobile views with minimal restrictions. It was important for me to
        enable her to show her full breadth of talent and creativity.
      </p>,
      <p>
        Developing a non-compromise site for a product designer meant that I
        needed to use all my CSS skills. I also decided not to use any CSS
        framework so I can use this project as a learning experience to improve my
        skills. I used React for routing and repeating components and Heroku for
        hosting.
      </p>,
      <p>
        One of my challenges was developing a responsive image carousel, which I
        used scroll snap and grid properties for. And fully custom buttons with
        hover states and :before and :after so the markup will only need a
        button element for it.
      </p>,
    ],
    images: [alona3, alona2],
  },
  demoLink: "https://alona.design",
} as PageContent;

export {};
