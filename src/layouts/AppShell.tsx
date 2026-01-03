import Navbar from "../components/layouts/Navbar/Navbar";
import { Outlet } from "react-router";

export default function AppShell() {
  return (
    <div className="flex flex-col-reverse min-h-screen lg:flex-row">
      <Navbar />
      <main className="flex-1 mx-4 my-6 md:mt-10 md:mb-8 md:mx-10">
        <Outlet />
      </main>
    </div>
  );
}
