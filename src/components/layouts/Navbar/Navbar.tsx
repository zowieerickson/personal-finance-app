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
      className={`flex flex-col bg-grey-900 text-grey-300 pt-2 px-4 rounded-t-xl pr-4 lg:transition-all lg:duration-250 lg:ease-in-out lg:rounded-t-none lg:rounded-r-xl lg:pt-10 lg:pb-32.5 lg:px-0 lg:pr-6 ${
        isMinimized ? "lg:w-24" : "lg:w-75"
      }`}
    >
      <div className="hidden mb-16 ml-8 lg:block">
        <LogoLarge
          className={`absolute transition-opacity duration-300 ${
            isMinimized ? "opacity-0" : "opacity-100"
          }`}
        />
        <LogoSmall
          className={`absolute transition-opacity duration-300 ${
            isMinimized ? "opacity-100 left-[37px]" : "opacity-0"
          }`}
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <ul className="flex flex-row justify-between items-center lg:gap-1 lg:flex-col lg:items-stretch">
          <li className="w-full">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex justify-center items-center border-b-4 border-transparent py-2 px-5 lg:justify-start lg:gap-4 lg:py-4 lg:ps-8 lg:font-bold hover:text-grey-100 ${
                  isActive ? styles.activeLink : ""
                }`
              }
            >
              <IconNavOverview />
              <span
                className={`hidden transition-all duration-250 ease-in-out whitespace-nowrap lg:block ${
                  isMinimized
                    ? "opacity-0 w-0 pointer-events-none"
                    : "opacity-100 w-auto"
                }`}
              >
                Overview
              </span>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                `flex justify-center items-center border-b-4 border-transparent py-2 px-5 lg:justify-start lg:gap-4 lg:py-4 lg:ps-8 lg:font-bold hover:text-grey-100 ${
                  isActive ? styles.activeLink : ""
                }`
              }
            >
              <IconNavTransactions />
              <span
                className={`hidden transition-all duration-250 ease-in-out whitespace-nowrap lg:block ${
                  isMinimized
                    ? "opacity-0 w-0 pointer-events-none"
                    : "opacity-100 w-auto"
                }`}
              >
                Transactions
              </span>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/budgets"
              className={({ isActive }) =>
                `flex justify-center items-center border-b-4 border-transparent py-2 px-5 lg:justify-start lg:gap-4 lg:py-4 lg:ps-8 lg:font-bold hover:text-grey-100 ${
                  isActive ? styles.activeLink : ""
                }`
              }
            >
              <IconNavBudgets />
              <span
                className={`hidden transition-all duration-250 ease-in-out whitespace-nowrap lg:block ${
                  isMinimized
                    ? "opacity-0 w-0 pointer-events-none"
                    : "opacity-100 w-auto"
                }`}
              >
                Budgets
              </span>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/pots"
              className={({ isActive }) =>
                `flex justify-center items-center border-b-4 border-transparent py-2 px-5 lg:justify-start lg:gap-4 lg:py-4 lg:ps-8 lg:font-bold hover:text-grey-100 ${
                  isActive ? styles.activeLink : ""
                }`
              }
            >
              <IconNavPots />
              <span
                className={`hidden transition-all duration-250 ease-in-out whitespace-nowrap lg:block ${
                  isMinimized
                    ? "opacity-0 w-0 pointer-events-none"
                    : "opacity-100 w-auto"
                }`}
              >
                Pots
              </span>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/recurring-bills"
              className={({ isActive }) =>
                `flex justify-center items-center border-b-4 border-transparent py-2 px-5 lg:justify-start lg:gap-4 lg:py-4 lg:ps-8 lg:font-bold hover:text-grey-100 ${
                  isActive ? styles.activeLink : ""
                }`
              }
            >
              <IconNavRecurringBills />
              <span
                className={`hidden transition-all duration-250 ease-in-out whitespace-nowrap lg:block ${
                  isMinimized
                    ? "opacity-0 w-0 pointer-events-none"
                    : "opacity-100 w-auto"
                }`}
              >
                Recurring Bills
              </span>
            </NavLink>
          </li>
        </ul>
        <div
          className="hidden items-center gap-4 ps-8 font-bold cursor-pointer hover:text-grey-100 lg:flex"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          <IconMinimizeMenu
            className={`transition-transform duration-250 ${
              isMinimized ? "rotate-180" : "rotate-0"
            }`}
          />
          <span
            className={`transition-all duration-250 ease-in-out whitespace-nowrap ${
              isMinimized
                ? "opacity-0 w-0 pointer-events-none"
                : "opacity-100 w-auto"
            }`}
          >
            Minimize Menu
          </span>
        </div>
      </div>
    </nav>
  );
}
