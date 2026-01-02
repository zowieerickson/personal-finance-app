import Navbar from "../components/layouts/Navbar/Navbar";
import { Outlet } from "react-router";

export default function AppShell() {
  return (
    <div className="flex flex-col-reverse min-h-screen lg:flex-row">
      <Navbar />
      <main className="mx-4 my-6 md:w-full md:mt-10 md:mb-8 md:mx-10">
        <Outlet />
      </main>
    </div>
  );
}
