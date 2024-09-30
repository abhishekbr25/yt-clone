export function SideBarButton({ label, iconSrc, onClick }) {
  return (
    <div className="flex justify-start items-center hover:bg-neutral-800 p-1 pl-3 m-1 rounded-lg text-white">
      <img src={iconSrc} alt="" />
      <button className=" mx-2 my-1" onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
