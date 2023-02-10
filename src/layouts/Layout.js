import NavbarLayout from "./NavbarLayout";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full h-screen flex flex-col bg-[#191919] overflow-y-scroll">
      <div className="grow sticky top-0">
      <Outlet />
      </div>
      <NavbarLayout />
    </div>
  );
}
