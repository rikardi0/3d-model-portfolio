import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContactPage from "./components/contact/ContactPage";
import DronDetails from "./components/details/DronDetails";
import CameraDetails from "./components/details/CameraDetails";
import GenevaDetails from "./components/details/GenevaDetails";
import BicycleDetails from "./components/details/BicycleDetails";
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
    path: "/Dron-model",
    element: <DronDetails />,
  },
  {
    path: "/Camera-model",
    element: <CameraDetails />,
  },
  {
    path: "/Bicycle-model",
    element: <BicycleDetails />,
  },
  {
    path: "/Geneva-drive-model",
    element: <GenevaDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
