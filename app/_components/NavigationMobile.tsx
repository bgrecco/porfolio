import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function NavigationMobile() {
  return (
    <nav
      id="section-header-mobile-navigation"
      className="lg:hidden z-10 hover:text-secondary hover:scale-110 duration-300 ease-in-out transition-colors cursor-pointer"
    >
      <Bars3Icon className="h-8 w-8" />
    </nav>
  );
}
