import React, { useEffect, useState } from "react";
import { Pages } from "../pages-data";
import { MainPage } from "../pages/main-page";

export const MainContent = () => {
  const [selectedPage, setSelectedPage] = useState<string>(Pages.MAIN);

  useEffect(() => {
    // change selected page
  }, []);

  return <div className="main-container">{getSelectedPage(selectedPage)}</div>;
};

const getSelectedPage = (selectedPage: string) => {
  switch (selectedPage) {
    case Pages.MAIN:
      return <MainPage />;
    default:
      return <h1>page not found</h1>;
  }
};
