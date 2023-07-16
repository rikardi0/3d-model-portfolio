import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContactPage from "./components/contact/ContactPage";
import DronDetails from "./components/dron-details/DronDetails";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Contact",
    element: <ContactPage />,
  },
  {
    path: "/dron-model",
    element: <DronDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
