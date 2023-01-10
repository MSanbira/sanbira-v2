import React from "react";
import { Pages } from "../pages-data";
import { MainPage } from "../pages/main-page";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import { getSubPath, getRootPath } from "../utils";
import { ProjectPage } from "../pages/project-page";

export const MainProjects = [
  Pages.LOADMILL,
  Pages.MYSIZE,
  Pages.ALONA,
  Pages.EXTENSIONS,
  Pages.CSSBATTLE,
  Pages.MISC,
];

export const MainContent = () => {

  return (
    <div className="main-container">
      <Router>
        <Switch>
          <Route path={getRootPath()} component={MainPage} exact />
          {MainProjects.map((project) => (
            <Route
              path={getSubPath(project)}
              component={() => ProjectPage({ project })}
              exact
            />
          ))}

          <Redirect from="*" to={getRootPath()} />
        </Switch>
      </Router>
    </div>
  );
};
