import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavbarCom from "./navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeCom from "./Components/home";
import Routerr from "./Routes";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavbarCom />
    <Routerr />
  </BrowserRouter>
);
