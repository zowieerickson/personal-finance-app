import Navbar from "../components/layouts/Navbar/Navbar";
import { Outlet } from "react-router";

export default function AppShell() {
  return (
    <div className="flex min-h-screen gap-10">
      <Navbar />
      <main className="mt-8">
        <Outlet />
      </main>
    </div>
  );
}
