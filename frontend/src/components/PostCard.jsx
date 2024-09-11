import { Bookmark, Heart, MessageSquare } from "lucide-react";
import { useCallback, useState } from "react";

export function PostCard({ src }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleLike = useCallback(() => {
    setIsLiked(!isLiked);
  }, [isLiked]);

  const toggleBookmarked = useCallback(() => {
    setIsBookmarked(!isBookmarked);
  }, [isBookmarked]);

  return (
    <div className="bg-slate-900 max-w-4xl mx-auto mb-4 py-4 rounded-xl">
      <div className="flex flex-col items-center gap-3 max-w-xl mx-auto">
        <div className="actualpost ">
          {/* post form backend */}
          <div className=" bg-black ">
            <img src={src} className="w-[720px] h-[480px] object-contain" />
          </div>
        </div>
        <div className="userInteractivityIcons flex justify-between w-full text-white px-2">
          <div className="text-red-900 flex w-1/5 justify-between">
            <div>
              <Heart
                fill={`${isLiked ? "red" : "none"}`}
                color={`${isLiked ? "red" : "grey"}`}
                onClick={toggleLike}
              />
            </div>
            <div>
              <MessageSquare />
            </div>
          </div>
          <div>
            <Bookmark
              fill={`${isBookmarked ? "grey" : "none"}`}
              color="grey"
              onClick={toggleBookmarked}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// {src}
// img fixed h,w object contain to set aspect ratio accordingly
//              fill={`${isLiked ? "red" : "grey"}`}
