import React from "react";
import { PageContent } from "../../pages-data";
import cascadeKitIcon from "../../assets/images/cascadekit/CascadeKitIcon.png";
import cascadeKitHome from "../../assets/images/cascadekit/cascade-kit-home.png";
import cascadeKitNpm from "../../assets/images/cascadekit/cascade-kit-npm.png";

export const CascadeKitContent = {
  topSection: {
    title: "CascadeKit",
    tldr: `An opinionated system for bootstrapping apps with native CSS and zero runtime overhead.`,
    image: cascadeKitIcon,
    noShadow: true,
  },
  mainSection: {
    paragraphs: [
      <p>
        CascadeKit is an opinionated system for bootstrapping component-based web apps on native CSS. Modern frontends
        tend to bury styling under abstractions, frameworks, and packages, but the browser underneath still runs plain
        HTML, CSS, and JavaScript. CascadeKit strips away the abstraction layers that only cost you in production,
        leaving leaner, faster apps that stay performant and inclusive across a wider range of devices.
      </p>,
      <>
        <h3>The problem</h3>
        <p>
          Most CSS tooling breaks down once an app needs a distinct visual language. Runtime solutions like Emotion and
          CSS Modules don't scale when you need broad theming or overrides that live outside individual components, and
          utility-first frameworks start working against you the moment your UI stops looking generic. The missing piece
          is a native-CSS way to build a custom, scalable UI — one that supports global theming and team-level overrides
          without fighting the tools.
        </p>
      </>,
      <>
        <h3>The approach</h3>
        <p>
          CascadeKit is a framework of principles and tools that leans on what the browser already gives you for free.
          Styling is organized into explicit cascade layers (<code>@layer</code>) so theming and overrides have a
          predictable, controllable order. Values are token-driven through custom properties, component CSS is
          co-located with its component, and layout comes from a small utility system instead of one-off CSS. Everything
          ships with zero runtime overhead and is designed to slot naturally into a modern React codebase.
        </p>
      </>,
    ],
    images: [cascadeKitNpm, cascadeKitHome],
  },
  demoLink: "https://cascadekit.io",
} as PageContent;

export {};
