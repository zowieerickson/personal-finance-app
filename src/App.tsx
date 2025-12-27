import "./App.css";
import { Routes, Route } from "react-router";

import Home from "./pages/Dashboard/Home.tsx";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Transactions from "./pages/Dashboard/Transactions.tsx";
import Budgets from "./pages/Dashboard/Budgets.tsx";
import Pots from "./pages/Dashboard/Pots.tsx";
import RecurringBills from "./pages/Dashboard/RecurringBills.tsx";
import AppShell from "./layouts/AppShell.tsx";

function App() {
  return (
    <Routes>
      {/* Dashboard Pages -- Refactor to be protected route */}
      <Route element={<AppShell />}>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/pots" element={<Pots />} />
        <Route path="/recurring-bills" element={<RecurringBills />} />
      </Route>
      {/* Auth Pages */}
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
