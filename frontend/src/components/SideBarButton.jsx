export function SideBarButton({ label, iconSrc, href }) {
  return (
    <div className="flex justify-start items-center hover:bg-neutral-800 p-1 pl-3 m-1 rounded-lg text-white">
      <img src={iconSrc} alt="" />
      <a className=" mx-2 my-1" href={href}>
        {label}
      </a>
    </div>
  );
}
