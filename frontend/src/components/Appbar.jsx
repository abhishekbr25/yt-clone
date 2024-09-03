import { SearchBar } from "./SearchBar";

export function AppBar() {
  return (
    <nav className="sticky top-0 flex justify-between items-center bg-neutral-800 h-14">
      <div>LOGO</div>
      <SearchBar />
      <div className="">
        <span>chat </span>
        <span>post </span>
        <span>profile |  Signup</span>
      </div>
    </nav>
  );
}

// others (in order)- chat, createpost, profile
//sticky top-0 -> make it fixed to top