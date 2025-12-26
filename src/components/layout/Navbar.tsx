import { Link, NavLink } from "react-router";

import { LogoLarge } from "../logos";
import { IconNavOverview } from "../icons";
import { IconNavBudgets } from "../icons";
import { IconNavPots } from "../icons";
import { IconNavRecurringBills } from "../icons";
import { IconNavTransactions } from "../icons";
import { IconMinimizeMenu } from "../icons";

export default function Navbar() {
  return (
    <nav className="flex flex-col bg-gray-900 text-gray-300 px-8 pt-10 pb-32.5 rounded-r-xl">
      <LogoLarge className="mb-10" />
      <div className="flex flex-col justify-between flex-1">
        <ul className="flex flex-col">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-4 my-4 ${isActive ? "active-link" : ""}`
              }
            >
              <IconNavOverview />
              Overview
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                `flex items-center gap-4 my-4 ${isActive ? "active-link" : ""}`
              }
            >
              <IconNavTransactions />
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/budgets"
              className={({ isActive }) =>
                `flex items-center gap-4 my-4 ${isActive ? "active-link" : ""}`
              }
            >
              <IconNavBudgets />
              Budgets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pots"
              className={({ isActive }) =>
                `flex items-center gap-4 my-4 ${isActive ? "active-link" : ""}`
              }
            >
              <IconNavPots />
              Pots
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recurring-bills"
              className={({ isActive }) =>
                `flex items-center gap-4 my-4 ${isActive ? "active-link" : ""}`
              }
            >
              <IconNavRecurringBills />
              Recurring Bills
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <IconMinimizeMenu /> Minimize Menu
        </div>
      </div>
    </nav>
  );
}
