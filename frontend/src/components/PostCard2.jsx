import { Bookmark, Heart, MessageSquare } from "lucide-react";
import { useCallback, useState } from "react";

export default function PostCard2({ src, title }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleLike = useCallback(() => {
    setIsLiked((prevState) => !prevState);
  }, []);

  const toggleBookmarked = useCallback(() => {
    setIsBookmarked((prevState) => !prevState);
  }, []);

  return (
    <div className="postCard bg-blue-800 mb-4 py-2 rounded-xl overflow-hidden mx-auto ">
      {/* User Details */}
      <div className="UserDetails px-4 pb-1">
        <div className="channelName flex gap-3 items-center">
          {/* Profile Picture */}
          <div className="profilepic w-8 h-8 rounded-full overflow-hidden">
            <img src="/profic.png" alt="Profile" />
          </div>
          {/* Username */}
          <div className="userName text-gray-300 text-sm">username</div>
        </div>
      </div>

      <div className="text-s text-white pb-2 px-3 font-bold">
        {title ? (
          title
        ) : (
          <div className="w-[92%]">
            1234567891asldfjlsjflasjdf;asd234567789123456756789
          </div>
        )}
      </div>

      <div className="w-[350px] h-[350px] md:w-[500px] lg:w-[600px] lg:h-[500px] bg-black ">
        <img
          src={src}
          className="w-full h-full object-contain object-center "
        />
      </div>

      {/* Interaction Icons */}
      <div className="userInteractivityIcons flex justify-between w-full text-white px-4 py-2">
        <div className="flex w-1/5 justify-between">
          {/* Like Button */}
          <div onClick={toggleLike} className="cursor-pointer">
            <Heart
              fill={isLiked ? "red" : "none"}
              color={isLiked ? "red" : "grey"}
            />
          </div>
          {/* Comment Button */}
          <div className="cursor-pointer">
            <MessageSquare color="grey" />
          </div>
        </div>
        {/* Bookmark Button */}
        <div onClick={toggleBookmarked} className="cursor-pointer">
          <Bookmark fill={isBookmarked ? "grey" : "none"} color="grey" />
        </div>
      </div>
    </div>
  );
}
