import "./style.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import React from "react";
import SlowDown from "./pages/SlowDown/SlowDown";
import CompB from "./pages/CompB";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "slow-down",
    element: <SlowDown />,
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
