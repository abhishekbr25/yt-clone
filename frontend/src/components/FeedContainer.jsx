import { SideBar } from "./SideBar";
import { PostGrid } from "./PostGrid";

export function FeedContainer() {
  return (
    <div className="flex justify-between ">
      <div className=" w-1/6">
        <SideBar />
      </div>
      <div className="bg-yellow-800 flex-grow ">
        <PostGrid />
      </div>
    </div>
  );
}

//resizable container - resize-x overflow-auto
