import ToasterContext from "../../context/ToasterContext";

import Header from "../Header";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <ToasterContext />
      <Header />
      <div className="w-full min-h-full max-w-[1200px] mx-auto px-10">
        <Outlet />
      </div>
    </>
  );
}
