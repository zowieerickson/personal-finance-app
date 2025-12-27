import { Link, NavLink } from "react-router";

import styles from "./Navbar.module.css";

import { LogoLarge } from "../../logos";
import { IconNavOverview } from "../../icons";
import { IconNavBudgets } from "../../icons";
import { IconNavPots } from "../../icons";
import { IconNavRecurringBills } from "../../icons";
import { IconNavTransactions } from "../../icons";
import { IconMinimizeMenu } from "../../icons";

export default function Navbar() {
  return (
    <nav className="flex flex-col bg-gray-900 w-[300px] text-gray-300 pt-10 pb-32.5 pr-4 rounded-r-xl">
      <LogoLarge className="mb-10 ml-8" />
      <div className="flex flex-col justify-between flex-1">
        <ul className="flex flex-col">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-4 py-4 ps-8 border-l-4 font-bold border-transparent ${
                  isActive ? styles.activeLink : ""
                }`
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
                `flex items-center gap-4 py-4 px-8 border-l-4 font-bold border-transparent ${
                  isActive ? styles.activeLink : ""
                }`
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
                `flex items-center gap-4 py-4 px-8 border-l-4 font-bold border-transparent ${
                  isActive ? styles.activeLink : ""
                }`
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
                `flex items-center gap-4 py-4 px-8 border-l-4 font-bold border-transparent ${
                  isActive ? styles.activeLink : ""
                }`
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
                `flex items-center gap-4 py-4 px-8 border-l-4 font-bold border-transparent ${
                  isActive ? styles.activeLink : ""
                }`
              }
            >
              <IconNavRecurringBills />
              Recurring Bills
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-4 px-8">
          <IconMinimizeMenu /> Minimize Menu
        </div>
      </div>
    </nav>
  );
}
