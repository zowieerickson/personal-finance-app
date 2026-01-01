import Navbar from "../components/layouts/Navbar/Navbar";
import { Outlet } from "react-router";

export default function AppShell() {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <main className="w-full mt-10 mb-8 mx-10">
        <Outlet />
      </main>
    </div>
  );
}
