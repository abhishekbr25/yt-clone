import { SearchBar } from "./SearchBar";

export function AppBar() {
  return (
    <div className="flex justify-between items-center bg-neutral-800 text-white h-14">
      <div>LOGO</div>
      <SearchBar />
      <div className="">
        <span>chat </span>
        <span>post </span>
        <span>profile |  Signup</span>
      </div>
    </div>
  );
}

// others (in order)- chat, createpost, profile
