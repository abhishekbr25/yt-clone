import { useCallback, useEffect, useState } from "react";
import { PostGrid } from "../components/PostGrid";
import { SideBar } from "../components/SideBar";
import { Menu } from "lucide-react";
import { SearchBar } from "../components/SearchBar";

export function Feed() {
  // const [isOpen, setIsOpen] = useState(window.innerWidth>=1024 ? true : false);
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024);

  const hamburgerClickHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className="feed">
      <nav className="flex justify-between items-center bg-neutral-800 h-14">
        logo
        <button onClick={hamburgerClickHandler} className="lg:hidden">
          <Menu />
        </button>
        <SearchBar />
        <div>
          <span>chat </span>
          <span>post </span>
          <span>profile | Signup</span>
        </div>
      </nav>
      {isOpen && (
        <aside>
          <SideBar />
        </aside>
      )}
      <main>
        <PostGrid />
      </main>
    </div>
  );
}
// neutral-900
