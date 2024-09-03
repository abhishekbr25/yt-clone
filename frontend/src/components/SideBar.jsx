import { SideBarButton } from "./SideBarButton";

export function SideBar() {
  return (
    <div className="flex flex-col justify-between text-slate-300 ">
      <div className="button-box ml-8 my-5 flex flex-col justify-between ">
        <SideBarButton label={"Home"} iconSrc={"/search-icon.svg"} href={""} />
        <SideBarButton label={"Liked"} iconSrc={"/search-icon.svg"} href={""} />
        <SideBarButton label={"Space"} iconSrc={"/search-icon.svg"} href={""} />
        <SideBarButton label={"LIve"} iconSrc={"/search-icon.svg"} href={""} />
      </div>
      <hr className="mx-5" />
      <div className="button-box ml-8 my-5 flex flex-col justify-between  ">
        <SideBarButton label={"Home"} iconSrc={"/search-icon.svg"} href={""} />
        <SideBarButton label={"Liked"} iconSrc={"/search-icon.svg"} href={""} />
        <SideBarButton label={"Space"} iconSrc={"/search-icon.svg"} href={""} />
        <SideBarButton label={"LIve"} iconSrc={"/search-icon.svg"} href={""} />
      </div>
        <hr className="mx-5" />
        <div className="button-box ml-8 my-5 flex flex-col justify-between text-red-400">
          <SideBarButton label={"logout"} iconSrc={"/search-icon.svg"} href={""} /> 
        </div>   
    </div>
  );
}
