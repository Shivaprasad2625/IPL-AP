import React from "react";

import ReactDOM from "react-dom/client";
import { Rcb } from "./Pages/Rcb";
import { Csk } from "./Pages/Csk";
import { Dc } from "./Pages/Dc";
import App from "./App";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="rcb" element={<Rcb />} />
      <Route path="csk" element={<Csk />} />
      <Route path="dc" element={<Dc />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
