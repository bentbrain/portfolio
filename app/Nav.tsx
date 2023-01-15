import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <nav>
      <ol className="flex gap-2 font-bold">
        <li className="hover:text-lime-500 transition-colors ">
          <Link href={"/projects"}>Projects</Link>
        </li>
        <li className="hover:text-lime-500 transition-colors ">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ol>
    </nav>
  );
}

export default Nav;
