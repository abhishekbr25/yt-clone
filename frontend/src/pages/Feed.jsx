import { AppBar } from "../components/Appbar"; 
import { PostGrid } from "../components/PostGrid";
import { SideBar } from "../components/SideBar";
export function Feed() {
  return (
    <div className="feed">
      <nav>
        <AppBar />
      </nav>
      <aside>
        <SideBar />
      </aside>
      <main>
        <PostGrid />
      </main>
    </div>
  );
}
// neutral-900

<div className="flex justify-between "></div>;
