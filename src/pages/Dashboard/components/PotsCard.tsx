import SvgIconPot from "../../../components/icons/IconPot";
import { IconCaretRight } from "../../../components/icons";
import { Link } from "react-router";

export default function PotsCard() {
  return (
    <section className="flex flex-col px-5 py-6 bg-white rounded-xl md:p-8">
      <div className="flex justify-between mb-5">
        <h2 className="text-preset-2">Pots</h2>
        <Link to="pots" className="flex items-center gap-4">
          <p className="text-preset-4 text-grey-500">See Details</p>
          <IconCaretRight />
        </Link>
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex items-center rounded-xl bg-beige-100 px-4 py-5">
          <SvgIconPot />
          <div className="ms-5.5">
            <h3 className="mb-3 text-preset-4 text-grey-500">Total Saved</h3>
            <p className="text-preset-1">$850</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="min-w-[130.5px] border-l-4 border-green">
            <div className="ms-4">
              <h4 className="mb-1 text-preset-5 text-grey-500">Savings</h4>
              <p className="text-preset-4-bold">$159</p>
            </div>
          </div>
          <div className="min-w-[130.5px] border-l-4 border-cyan">
            <div className="ms-4">
              <h4 className="mb-1 text-preset-5 text-grey-500">Gift</h4>
              <p className="text-preset-4-bold">$40</p>
            </div>
          </div>
          <div className="min-w-[130.5px] border-l-4 border-navy">
            <div className="ms-4">
              <h4 className="mb-1 text-preset-5 text-grey-500">
                Concert Ticket
              </h4>
              <p className="text-preset-4-bold">$110</p>
            </div>
          </div>
          <div className="min-w-[130.5px] border-l-4 border-yellow">
            <div className="ms-4">
              <h4 className="mb-1 text-preset-5 text-grey-500">New Laptop</h4>
              <p className="text-preset-4-bold">$10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
