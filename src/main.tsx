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
import Transactions from "./pages/Transactions.tsx";
import Budgets from "./pages/Budgets.tsx";
import Pots from "./pages/Pots.tsx";
import RecurringBills from "./pages/RecurringBills.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Dashboard Pages -- Refactor to be protected route */}
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/pots" element={<Pots />} />
        <Route path="/recurring-bills" element={<RecurringBills />} />

        {/* Auth Pages */}
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
