import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className=" py-4  px-clamp text-center  mb-4">
      <Link href="/">
        <p className="font-bold text-xl">Liam Cullen</p>
      </Link>
    </header>
  );
}

export default Header;
