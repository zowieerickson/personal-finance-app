import SvgIconPot from "../../../components/icons/IconPot";

export default function PotsCard() {
  return (
    <section className="flex flex-col bg-white p-8 rounded-xl">
      <div className="flex justify-between mb-5">
        <h2>Pots</h2>
        <p>See Details &gt;</p>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center rounded-xl bg-beige-100 px-5 py-4">
          <SvgIconPot />
          <div className="ms-4">
            <h3 className="text-preset-4 color-grey-500">Total Spend</h3>
            <p className="text-preset-1 color-beige-900">$850</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-l-4 border-green">
            <div className="ms-4">
              <h4>Savings</h4>
              <p>$159</p>
            </div>
          </div>
          <div className="border-l-4 border-cyan">
            <div className="ms-4">
              <h4>Gift</h4>
              <p>$40</p>
            </div>
          </div>
          <div className="border-l-4 border-navy">
            <div className="ms-4">
              <h4>Concert Ticket</h4>
              <p>$110</p>
            </div>
          </div>
          <div className="border-l-4 border-yellow">
            <div className="ms-4">
              <h4>New Laptop</h4>
              <p>$10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
