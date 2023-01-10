import React from "react";
import { PageContent } from "../../pages-data";
import mysize1 from "../../assets/images/mysize/mysize1.jpeg";
import mysize2 from "../../assets/images/mysize/mysize2.jpeg";
import mysize3 from "../../assets/images/mysize/mysize3.png";

export const MysizeContent = {
  topSection: {
    title: "MySize",
    tldr: `A way to get your online shopping clothing size with phone measurements.`,
    image: mysize1,
  },
  mainSection: {
    paragraphs: [
      <p>
        MySize is an application that allows users to accurately measure
        themselves so they can shop online with confidence. The app uses
        advanced size calculation algorithm which is also connected to sizing
        databases from a variety of retailers. When I worked as MySize's first
        in-house full-stack developer they had a Vanilla widget that opened in
        the retailer product page with the user profile and size, a Shopify
        extension for retailers, algorithm dev team, iOS, and Android apps.
      </p>,
      <p>
        As a full-stack developer, I used Ruby on Rails, to manage the Postgres
        database for all the apps, and server-side rendering for the Shopify
        extension. I also used Vanilla Javascript, HTML, and CSS to create a
        customizable, Lightweight and efficient widget, taking performance
        requirements into account. In the widget app a user could also sign in
        via Firebase and give a quick size solution using only height and
        weight.
      </p>,
      <p>
        One of my challenges was writing a new size-calculating algorithm with
        the user's measurements, garment measurements, math formulas, and
        preferences. Not only did it need to give the right or closest size every
        time, but by using caching and smart database inquiring I successfully
        lowered the run time to less than a second consistently.
      </p>,
    ],
    images: [mysize2, mysize3],
  },
  demoLink: "https://mysizeid.com",
} as PageContent;

export {};
