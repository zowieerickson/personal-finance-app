import "./App.css";
import { Routes, Route } from "react-router";

import Home from "./pages/Home.tsx";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import AboutPage from "./pages/AboutPage";
import Transactions from "./pages/Transactions.tsx";
import Budgets from "./pages/Budgets.tsx";
import Pots from "./pages/Pots.tsx";
import RecurringBills from "./pages/RecurringBills.tsx";

function App() {
  return (
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
  );
}

export default App;
