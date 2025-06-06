import React from "react";
import { Projects } from "../pages-data";
import { MainPage } from "../pages/main-page";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import { getSubPath, getRootPath } from "../utils";
import { ProjectPage } from "../pages/project-page";

export const MainContent = () => {
  return (
    <div className="main-container">
      <Router>
        <Switch>
          <Route path={getRootPath()} component={MainPage} exact />
          {Projects.map((project) => (
            <Route path={getSubPath(project)} component={() => ProjectPage({ project })} exact key={project} />
          ))}

          <Redirect from="*" to={getRootPath()} />
        </Switch>
      </Router>
    </div>
  );
};
