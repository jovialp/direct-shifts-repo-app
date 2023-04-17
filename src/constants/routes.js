import React from 'react';

// Pages
import App from '../App';
import Dashboard from '../views/dashboard/dashboard';
import PullRequests from '../views/pull-request/list';

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
];

export default ROUTES;
