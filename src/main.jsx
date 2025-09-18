import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Main from './layout/Main.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
