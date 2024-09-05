import { useState } from "react";
import { SearchBar } from "./SearchBar";

export function AppBar({setIsOpen}) {
  return (
    <nav className="flex justify-between items-center bg-neutral-800  h-14">
      <div>LOGO</div>
      <button onClick={() => {setIsOpen(p=>setIsOpen(!p))}}>
        <img src="/hamburger-icon.svg" alt="hamburger-icon" />
      </button>
      <SearchBar />
      <div className="">
        <span>chat </span>
        <span>post </span>
        <span>profile | Signup</span>
      </div>
    </nav>
  );
}

// others (in order)- chat, createpost, profile
//sticky top-0 -> make it fixed to top
