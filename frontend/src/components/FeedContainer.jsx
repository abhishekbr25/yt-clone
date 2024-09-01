import { LeftBar } from "./LeftBar";
import { PostGrid } from "./PostGrid";

export function FeedContainer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="bg-white col-span-1"><LeftBar/> </div>
      <div className="bg-yellow-100 col-span-3"><PostGrid/> </div>
    </div>
  );
}
