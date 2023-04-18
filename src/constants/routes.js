import React from 'react';

// Pages
import App from '../App';
import Dashboard from '../views/dashboard/dashboard';
import PullRequests from '../views/pull-request/list';
import PullRequestDetails from '../views/pull-request/details';

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
];

export default ROUTES;
