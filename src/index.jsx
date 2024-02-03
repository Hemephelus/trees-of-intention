import "./style.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import React from "react";
import SlowDown from "./pages/slow_down/SlowDown";
import GiveGratitude from "./pages/give_gratitude/GiveGratitude";
import Root from "./pages/root/Root";
import Intention from "./pages/give_gratitude/GiveGratitude";

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
        element: <Intention/>,
      },
      {
        path: "give-gratitude",
        element: <Intention/>,
      },
      {
        path: "take-responsibility",
        element: <Intention/>,
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
