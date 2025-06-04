import { AlonaContent } from "./pages/content/alona";
import { AtomGridTableContent } from "./pages/content/atom-grid-table";
import { CssBattleContent } from "./pages/content/cssbattle";
import { LoadmillContent } from "./pages/content/loadmill";
import { MiscContent } from "./pages/content/misc";
import { MysizeContent } from "./pages/content/mysize";

export const Pages = {
  ROOT: "sanbira",
  ABOUT: "about",
  LOADMILL: "loadmill",
  MYSIZE: "mysize",
  ALONA: "alona-design",
  CSSBATTLE: "css-battle",
  MISC: "misc",
  ATOM_GRID_TABLE: "atom-grid-table",
};

export const Projects = [
  Pages.LOADMILL,
  Pages.ATOM_GRID_TABLE,
  Pages.ALONA,
  Pages.CSSBATTLE,
  Pages.MYSIZE,
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
  [Pages.CSSBATTLE]: {
    title: "CSS Battle",
    startPlace: Math.floor(Math.random() * 200)
  },
  [Pages.MISC]: {
    title: "Misc",
    startPlace: Math.floor(Math.random() * 200)
  },
  [Pages.ATOM_GRID_TABLE]: {
    title: "Atom Grid Table",
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
  [Pages.MISC]: MiscContent,
  [Pages.ATOM_GRID_TABLE]: AtomGridTableContent,
} as {[key: string]: PageContent};
