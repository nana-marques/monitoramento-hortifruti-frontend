import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

//páginas carregadas no router
import Home from './assets/home/home.jsx'
import Profile from './assets/profile/profile.jsx'
import ErrorPage from './assets/ErrorPage.jsx'

//router
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
        path: "profile",
        element: <Profile />,
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
