import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import Home from "./pages/Home.tsx";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import AboutPage from "./pages/AboutPage";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
