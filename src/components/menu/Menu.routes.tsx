import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Shows from '../shows/Shows';
import Work from '../work/Work';
import Listen from '../music/Listen';
// import PacemakerList from "./components/pacemakers/PacemakerList.service";
// import ContentList from "./components/content/ContentList";
// import Video from "./components/video/Video";
// import NotFound from "./components/shared/notFound/NotFound";

export interface RouteOptions {
  path: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  exact: boolean;
}

const routes: RouteOptions[] = [
  {
    path: '/shows',
    component: Shows,
    exact: true
  },
  {
    path: '/work',
    component: Work,
    exact: true
  },
  {
    path: '/listen',
    component: Listen,
    exact: true
  }

  // {
  //   path: '*',
  //   component: NotFound,
  //   exact: false
  // }
];

export default routes;
