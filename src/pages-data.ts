import { AlonaContent } from "./pages/content/alona";
import { CssBattleContent } from "./pages/content/cssbattle";
import { ExtensionsContent } from "./pages/content/extensions";
import { LoadmillContent } from "./pages/content/loadmill";
import { MiscContent } from "./pages/content/misc";
import { MysizeContent } from "./pages/content/mysize";

export const Pages = {
  ROOT: "sanbira",
  ABOUT: "about",
  LOADMILL: "loadmill",
  MYSIZE: "mysize",
  ALONA: "alona-design",
  EXTENSIONS: "chrome-extensions",
  CSSBATTLE: "css-battle",
  MISC: "misc",
};

export const Projects = [
  Pages.LOADMILL,
  Pages.MYSIZE,
  Pages.ALONA,
  Pages.EXTENSIONS,
  Pages.CSSBATTLE,
  Pages.MISC,
];

export const PagesData = {
  [Pages.LOADMILL]: {
    title: "Loadmill",
    startPlace: Math.floor(Math.random() * 200)
  },
  [Pages.MYSIZE]: {
    title: "MySize",
    startPlace: Math.floor(Math.random() * 200)
  },
  [Pages.ALONA]: {
    title: "Alona.Design",
    startPlace: Math.floor(Math.random() * 200)
  },
  [Pages.EXTENSIONS]: {
    title: "Extensions",
    startPlace: Math.floor(Math.random() * 200)
  },
  [Pages.CSSBATTLE]: {
    title: "CSS Battle",
    startPlace: Math.floor(Math.random() * 200)
  },
  [Pages.MISC]: {
    title: "Misc",
    startPlace: Math.floor(Math.random() * 200)
  },
};

export const ExternalLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/MSanbira'
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matan-sanbira-695461109'
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/StudioSanbira'
  },
  {
    title: 'CodePan',
    href: 'https://codepen.io/MSanbira'
  },
  {
    title: 'Medium',
    href: 'https://matan-sanbira.medium.com'
  },
];

export interface PageContent {
  topSection: {
    title: string;
    tldr: string;
    image: string;
  };
  mainSection: {
    paragraphs: (string | JSX.Element)[];
    moreParagraphs?: (string | JSX.Element)[];
    images?: string[];
  };
  demoLink?: string;
};

export const PagesContent = {
  [Pages.LOADMILL]: LoadmillContent,
  [Pages.MYSIZE]: MysizeContent,
  [Pages.ALONA]: AlonaContent,
  [Pages.CSSBATTLE]: CssBattleContent,
  [Pages.EXTENSIONS]: ExtensionsContent,
  [Pages.MISC]: MiscContent,
} as {[key: string]: PageContent};
