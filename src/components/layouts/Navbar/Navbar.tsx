import { NavLink } from "react-router";

import styles from "./Navbar.module.css";

import { LogoLarge } from "../../logos";
import { LogoSmall } from "../../logos";
import { IconNavOverview } from "../../icons";
import { IconNavBudgets } from "../../icons";
import { IconNavPots } from "../../icons";
import { IconNavRecurringBills } from "../../icons";
import { IconNavTransactions } from "../../icons";
import { IconMinimizeMenu } from "../../icons";
import { useState } from "react";

export default function Navbar() {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <nav
      className={`flex flex-col bg-gray-900 text-gray-300 pt-10 pb-32.5 pr-4 rounded-r-xl transition-all duration-250 ease-in-out ${
        isMinimized ? "w-24" : "w-75"
      }`}
    >
      <div className="mb-16 ml-8">
        <LogoLarge
          className={`absolute transition-opacity duration-300 ${
            isMinimized ? "opacity-0" : "opacity-100"
          }`}
        />
        <LogoSmall
          className={`absolute transition-opacity duration-300 ${
            isMinimized ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <ul className="flex flex-col gap-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-4 py-4 ps-8 border-l-4 border-transparent font-bold ${
                  isActive ? styles.activeLink : ""
                }`
              }
            >
              <IconNavOverview className="w-5 h-5 min-w-5" />
              <span
                className={`transition-all duration-250 ease-in-out whitespace-nowrap ${
                  isMinimized ? "opacity-0 w-0" : "opacity-100 w-auto"
                }`}
              >
                Overview
              </span>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                `flex items-center gap-4 py-4 ps-8 border-l-4 border-transparent font-bold ${
                  isActive ? styles.activeLink : ""
                }`
              }
            >
              <IconNavTransactions className="w-5 h-5 min-w-5" />
              <span
                className={`transition-all duration-250 ease-in-out whitespace-nowrap ${
                  isMinimized ? "opacity-0 w-0" : "opacity-100 w-auto"
                }`}
              >
                Transactions
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/budgets"
              className={({ isActive }) =>
                `flex items-center gap-4 py-4 ps-8 border-l-4 border-transparent font-bold ${
                  isActive ? styles.activeLink : ""
                }`
              }
            >
              <IconNavBudgets className="w-5 h-5 min-w-5" />
              <span
                className={`transition-all duration-250 ease-in-out whitespace-nowrap ${
                  isMinimized ? "opacity-0 w-0" : "opacity-100 w-auto"
                }`}
              >
                Budgets
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pots"
              className={({ isActive }) =>
                `flex items-center gap-4 py-4 ps-8 border-l-4 border-transparent font-bold ${
                  isActive ? styles.activeLink : ""
                }`
              }
            >
              <IconNavPots className="w-5 h-5 min-w-5" />
              <span
                className={`transition-all duration-250 ease-in-out whitespace-nowrap ${
                  isMinimized ? "opacity-0 w-0" : "opacity-100 w-auto"
                }`}
              >
                Pots
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recurring-bills"
              className={({ isActive }) =>
                `flex items-center gap-4 py-4 ps-8 border-l-4 border-transparent font-bold ${
                  isActive ? styles.activeLink : ""
                }`
              }
            >
              <IconNavRecurringBills className="w-5 h-5 min-w-5" />
              <span
                className={`transition-all duration-250 ease-in-out whitespace-nowrap ${
                  isMinimized ? "opacity-0 w-0" : "opacity-100 w-auto"
                }`}
              >
                Recurring Bills
              </span>
            </NavLink>
          </li>
        </ul>
        <div
          className="flex items-center gap-4 ps-8 font-bold cursor-pointer"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          <IconMinimizeMenu
            className={`transition-transform duration-250 ${
              isMinimized ? "rotate-180" : "rotate-0"
            }`}
          />
          <span
            className={`transition-all duration-250 ease-in-out whitespace-nowrap ${
              isMinimized ? "opacity-0 w-0" : "opacity-100 w-auto"
            }`}
          >
            Minimize Menu
          </span>
        </div>
      </div>
    </nav>
  );
}
