export function PostCard({src}) {
  return (
    <div className="bg-slate-900 max-w-4xl mx-auto mb-4 py-4 rounded-xl">
      <div className="flex flex-col items-center gap-3 max-w-xl mx-auto">
        <div className="actualpost ">
            {/* post form backend */}
          <img src={src} />
        </div>
        <div className="userInteractivityIcons flex justify-between w-full text-white px-2">
          <div>like --- comment</div>
          <div>Save</div>
        </div>
      </div>
    </div>
  );
}

// {src}
