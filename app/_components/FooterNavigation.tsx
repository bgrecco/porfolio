import React from "react";
import Link from "next/link";
import { footerLinks } from "../_constants";

export default function FooterNavigation() {
  return (
    <nav id="section-footer-navigation">
      <ul className="flex gap-10">
        {footerLinks.map((navItem) => (
          <li key={navItem.id}>
            <Link
              href={navItem.url}
              rel="noopener noreferrer"
              target="_blank"
              className="block relative gap-4 z-10 hover:text-secondary hover:scale-110 duration-300 ease-in-out transition-colors"
              aria-label={navItem["aria-label"]}
            >
              {navItem.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
