import "./style.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import React from "react";
import CompA from "./components/CompA";
import CompB from "./components/CompB";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "clientA",
    element: <CompA />,
  },
  {
    path: "clientB",
    element: <CompB />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
