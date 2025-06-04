import React from "react";
import { PageContent } from "../../pages-data";
import { DemoLink } from "../../components/demo-link";
import basic from "../../assets/images/agt/basic.png";
import pageAndSort from "../../assets/images/agt/page-and-sort.png";

export const AtomGridTableContent = {
  topSection: {
    title: "Atom Grid Table",
    tldr: `A highly customizable React table component built with CSS Grid and Subgrid, 
        offering cell-level control and modern layout capabilities.`,
    image: basic,
  },
  mainSection: {
    paragraphs: [
      <p>
        Atom Grid Table is a modern React table component that leverages the power of CSS Grid and Subgrid to provide 
        unprecedented flexibility and performance. Built from the ground up with customization in mind, it offers 
        cell-level control while maintaining excellent performance for large datasets.
      </p>,
      <p>
        As the creator and maintainer of this open-source package, I designed it to solve the common pain points 
        developers face with existing table solutions. The component architecture emphasizes modularity and 
        extensibility, allowing developers to replace any base component with their own custom implementations 
        through a comprehensive provider system.
      </p>,
      <>
        <p style={{ marginBottom: 0 }}>Key technical features and innovations:</p>
        <ul>
          <li>CSS Grid and Subgrid architecture - providing native browser layout performance and flexibility.</li>
          <li>Virtualization support - efficiently rendering large datasets by only displaying visible rows.</li>
          <li>Cell-level customization - granular control over individual cell styling and behavior.</li>
          <li>Provider pattern implementation - allowing complete component replacement for maximum flexibility.</li>
          <li>TypeScript-first development - comprehensive type definitions for excellent developer experience.</li>
          <li>Minimal dependencies - only React, React DOM, and react-use for optimal bundle size.</li>
        </ul>
        <DemoLink link="https://agt.sanbira.com/" />
      </>,
      <>
        <h3>Advanced Features</h3>
        <p>
          The component supports advanced table functionality including sorting, pagination, row selection, 
          resizable columns, and sticky headers. The virtualization feature makes it capable of handling 
          thousands of rows without performance degradation, while the theming system provides multiple 
          built-in themes and full customization capabilities.
        </p>
        <DemoLink link="https://www.npmjs.com/package/@sanbira/atom-grid-table" />
      </>,
      <>
        <h3>Developer Experience</h3>
        <p>
          Built with developer experience as a priority, Atom Grid Table includes comprehensive TypeScript 
          definitions, detailed documentation, and a flexible API that scales from simple use cases to 
          complex enterprise applications. The provider pattern allows teams to maintain consistent 
          component libraries while leveraging the table's powerful features.
        </p>
      </>,
    ],
    images: [pageAndSort],
  },
} as PageContent;

export {}; 