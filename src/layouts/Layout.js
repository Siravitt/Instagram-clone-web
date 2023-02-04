import NavbarLayout from "./NavbarLayout";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full h-full bg-[#191919]">
      <Outlet />
      <NavbarLayout />
    </div>
  );
}
