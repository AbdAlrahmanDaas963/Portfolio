import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Stars from "./components/Stars";
import ShowWorks from "./screens/ShowWorks";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
        <div className="stars">
          <Stars />
        </div>
      </div>
    ),
  },
  {
    path: "/projects",
    element: <ShowWorks />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    {/* <div className="stars">
      <Stars />
    </div> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
