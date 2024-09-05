import { useRef } from "react";
import { AppBar } from "../components/Appbar";
import { PostGrid } from "../components/PostGrid";
import { SideBar } from "../components/SideBar";
export function Feed() {    
  return (
    <div className="feed bg-neutral-900  text-slate-300 ">
      <nav>
        <AppBar />
      </nav>
      <aside >
        <SideBar />
      </aside>
      <main>
        <PostGrid />
      </main>
    </div>
  );
}
// neutral-900

 
