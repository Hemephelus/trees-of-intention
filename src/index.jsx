import "./style.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import React from "react";
import SlowDown from "./pages/slow_down/SlowDown";
import GiveGratitude from "./pages/give_gratitude/GiveGratitude";
import Root from "./pages/root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path: "",
        element: <App />,
      },
      {
        path: "slow-down",
        element: <SlowDown />,
      },
      {
        path: "give-gratitude",
        element: <GiveGratitude />,
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
