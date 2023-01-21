import React from "react";
import Link from "next/link";
import Nav from "./Nav";

function Header() {
  return (
    <header className=" py-4 ">
      <div className="inner max-w-[2000px] mx-auto px-clamp flex justify-between ">
        <Link href="/">
          <p className="font-bold text-xl">Liam Cullen</p>
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
