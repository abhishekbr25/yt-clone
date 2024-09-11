import { PostCard } from "./PostCard";

export function PostGrid() {
  return (
    <div className="post-container bg-slate-800 px-40">
      <PostCard src={'/p2.png'}/>
      <PostCard src={'/post1.png'}/>
      <PostCard src={'p2.png'}/>
    </div>
  );
}
