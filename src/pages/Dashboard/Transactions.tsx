import DashboardHeader from "./components/DashboardHeader";
import { IconSearch } from "../../components/icons";
import SvgIconCaretDown from "../../components/icons/IconCaretDown";
import SvgIconCaretLeft from "../../components/icons/IconCaretLeft";
import SvgIconCaretRight from "../../components/icons/IconCaretRight";

export default function Transactions() {
  return (
    <>
      <DashboardHeader title="Transactions" />
      <section className="bg-white rounded-lg p-8">
        <div className="flex justify-between mb-6">
          <form className="relative inline-block">
            <input
              className="border border-beige-500 py-3 px-5 rounded-lg"
              placeholder="Search transaction"
            />
            <IconSearch className="absolute right-5 top-1/2 -translate-y-1/2" />
          </form>
          <div className="flex gap-6">
            <div className="flex items-center gap-3">
              <p>Sort by</p>
              <button className="flex items-center gap-4 border border-beige-500 py-3 px-5 rounded-lg text-preset-4">
                Latest <SvgIconCaretDown />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <p>Category</p>
              <button className="flex items-center gap-4 border border-beige-500 py-3 px-5 rounded-lg text-preset-4">
                All Transactions <SvgIconCaretDown />
              </button>
            </div>
          </div>
        </div>
        <div role="grid">
          <div
            role="row"
            className="grid grid-cols-[2fr_1fr_1fr_1fr] py-3 text-grey-500 text-preset-5 border-b border-beige-500 mb-6"
          >
            <div role="cell">Recipient / Sender</div>
            <div role="cell">Category</div>
            <div role="cell">Transaction Date</div>
            <div role="cell">Amount</div>
          </div>
          <div
            role="row"
            className="grid grid-cols-[2fr_1fr_1fr_1fr] pb-4 text-grey-500 text-preset-5 border-b border-beige-500 mb-6"
          >
            <div role="cell" className="text-preset-4-bold text-grey-900">
              Emma Richardson
            </div>
            <div role="cell">General</div>
            <div role="cell">19 Aug 2024</div>
            <div role="cell" className="text-preset-4-bold text-green">
              +$75.50
            </div>
          </div>
          <div
            role="row"
            className="grid grid-cols-[2fr_1fr_1fr_1fr] pb-4 text-grey-500 text-preset-5 border-b border-beige-500 mb-6"
          >
            <div role="cell" className="text-preset-4-bold text-grey-900">
              Savory Bites Bistro
            </div>
            <div role="cell">Dining Out</div>
            <div role="cell">19 Aug 2024</div>
            <div role="cell" className="text-preset-4-bold text-grey-900">
              -$55.50
            </div>
          </div>
          <div
            role="row"
            className="grid grid-cols-[2fr_1fr_1fr_1fr] pb-4 text-grey-500 text-preset-5 border-b border-beige-500 mb-6"
          >
            <div role="cell" className="text-preset-4-bold text-grey-900">
              Daniel Carter
            </div>
            <div role="cell">General</div>
            <div role="cell">18 Aug 2024</div>
            <div role="cell" className="text-preset-4-bold text-grey-900">
              -$42.30
            </div>
          </div>
        </div>
        <footer className="flex justify-between">
          <button className="flex items-center gap-4 text-preset-4 border border-beige-500 px-4 py-3 rounded-lg">
            <SvgIconCaretLeft /> Prev
          </button>
          <ul className="flex items-center gap-2">
            <li className="flex items-center px-4 py-2.5 border border-beige-500 rounded-lg text-preset-4 bg-grey-900 border-grey-900 text-white">
              <button>1</button>
            </li>
            <li className="flex items-center px-4 py-2.5 text-preset-4 border border-beige-500 rounded-lg">
              <button>2</button>
            </li>
            <li className="flex items-center px-4 py-2.5 text-preset-4 border border-beige-500 rounded-lg">
              <button>3</button>
            </li>
            <li className="flex items-center px-4 py-2.5 text-preset-4 border border-beige-500 rounded-lg">
              <button>4</button>
            </li>
            <li className="flex items-center px-4 py-2.5 text-preset-4 border border-beige-500 rounded-lg">
              <button>5</button>
            </li>
          </ul>
          <button className="flex items-center gap-4 text-preset-4 border border-beige-500 px-4 py-3 rounded-lg">
            Next <SvgIconCaretRight />
          </button>
        </footer>
      </section>
    </>
  );
}
