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
          <li className="flex items-center gap-4 my-4">
            <IconNavOverview />
            Overview
          </li>
          <li className="flex items-center gap-4 my-4">
            <IconNavTransactions />
            Transactions
          </li>
          <li className="flex items-center gap-4 my-4">
            <IconNavBudgets />
            Budgets
          </li>
          <li className="flex items-center gap-4 my-4">
            <IconNavPots />
            Pots
          </li>
          <li className="flex items-center gap-4 my-4">
            <IconNavRecurringBills />
            Recurring Bills
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <IconMinimizeMenu /> Minimize Menu
        </div>
      </div>
    </nav>
  );
}
