import React from "react";
import Link from "next/link";
import { navigation } from "../_constants";

export default function Navigation() {
  return (
    <nav id="section-header-navigation" className="z-10 ">
      <ul className="hidden gap-16 lg:flex">
        {navigation.map((navItem) => (
          <li key={navItem.id}>
            <Link
              href={navItem.url}
              className="block relative items-center gap-4 z-10 hover:text-secondary duration-300 ease-in-out"
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
