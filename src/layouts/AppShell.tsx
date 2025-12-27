import Navbar from "../components/layouts/Navbar/Navbar";
import { Outlet } from "react-router";

export default function AppShell() {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}
