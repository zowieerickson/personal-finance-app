export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-gray-300">
      <img src="/src/assets/images/logos/logo-large.svg"></img>
      <ul>
        <li>Overview</li>
        <li>Transactions</li>
        <li>Budgets</li>
        <li>Pots</li>
        <li>Recurring Bills</li>
      </ul>
    </nav>
  );
}
