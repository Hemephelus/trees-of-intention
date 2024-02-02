import './style.css'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './App'
import React from 'react';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "lol",
      element: <>hi</>,
    },
  ]);



const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(

    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)