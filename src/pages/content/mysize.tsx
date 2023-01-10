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
      <>
        MySize is based on a measuring app that gives its users the ability what
        size they need to order from online shops. to do that they use a size
        calculation algorithm and retailer's cloths measurement tables. When I
        worked as MySize's first in-house full-stack developer they had a
        Vanilla widget that opened in the retailer product page with the user
        profile and size, a Shopify extension for retailers, algorithm dev team,
        IOS, and Android apps.
      </>,
      <>
        As a full-stack developer, I used Ruby on Rails, to manage the Postgres
        database for all the apps, and server-side rendering for the Shopify
        extension. I also used Vanilla Javascript, HTML, and CSS to create a
        customizable, not performance heavy size widget, that could also sign in
        users via Firebase and give a quick size solution using only height and
        weight.
      </>,
      <>
        One of my challenges was writing a new size-calculating algorithm with
        the user's measurements, garment measurements, math formulas, and
        preferences. not only it needed to give the right or closest size every
        time, but by using caching and smart database inquiring I successfully
        lowered the run time to less than a second consistently.
      </>,
    ],
    images: [mysize2, mysize3],
  },
  demoLink: "https://mysizeid.com",
} as PageContent;

export {};
