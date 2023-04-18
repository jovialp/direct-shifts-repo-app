import React from 'react';

// Pages
import App from '../App';
import Dashboard from '../views/dashboard/dashboard';
import PullRequests from '../views/pull-request/list';
import PullRequestDetails from '../views/pull-request/details';
import Issues from '../views/issue/list';
import IssueDetails from '../views/issue/details';

const ROUTES = [
  // {
  //   path: '/',
  //   element: <App />,
  // },
  {
    path: '/',
    element: <Dashboard />,
  },

  {
    path: '/pull-requests',
    element: <PullRequests />,
  },
  {
    path: '/pull-request/:number',
    element: <PullRequestDetails />,
  },

  {
    path: '/issues',
    element: <Issues />,
  },
  {
    path: '/issue/:number',
    element: <IssueDetails />,
  },
];

export default ROUTES;
