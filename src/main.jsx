import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './assets/home/home.jsx';
import Perfil from './assets/perfil/index.jsx';
import ErrorPage from './assets/ErrorPage.jsx';

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "perfil",
        element: <Perfil />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
