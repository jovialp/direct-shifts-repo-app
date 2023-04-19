import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css';

// Constants
import ROUTES from './constants/routes';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter(ROUTES);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
