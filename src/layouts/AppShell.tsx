import Navbar from "../components/layout/Navbar/Navbar";
import { Outlet } from "react-router";

export default function AppShell() {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}
