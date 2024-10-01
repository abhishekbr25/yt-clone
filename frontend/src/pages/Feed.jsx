import { useCallback, useEffect, useState } from "react";
import { PostGrid } from "../components/PostGrid";
import { SideBar } from "../components/SideBar";
import { Menu } from "lucide-react";
import { SearchBar } from "../components/SearchBar";
import { useAuthContext } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

export function Feed() {
  // const [isOpen, setIsOpen] = useState(window.innerWidth>=1024 ? true : false);
  // const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024);
  const { state } = useAuthContext();
  const navigate = useNavigate();
  console.log("state.user : ", state.user);
  const hamburgerClickHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1024);
    };
    // console.log("rerun");
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="feed">
      <nav className="flex justify-between items-center bg-neutral-800 h-14">
        <div>
          <button onClick={hamburgerClickHandler} className="lg:hidden mx-3">
            <Menu />
          </button>
          logo
        </div>

        <button className="md:hidden">
          <img src="/search-icon.svg" alt="search" />
        </button>
        <div className="hidden md:block">
          <SearchBar />
        </div>

        {!state.user ? (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Signup
          </button>
        ) : (
          <div>
            <span>chat </span>
            <span>post </span>
            <span>profile </span>
          </div>
        )}
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
