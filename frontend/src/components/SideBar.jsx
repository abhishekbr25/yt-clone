import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hook/useAuth";
import { SideBarButton } from "./SideBarButton";

export function SideBar() {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  async function logoutHandler() {
    console.log("logout clicked");
    const response = await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    // const result = await response.json();
    console.log(response);
    if (response.status === 200) {
      dispatch({ type: "SIGNED_OUT" });
      navigate("/");
    }
  }
  return (
    <div className="flex flex-col justify-between ">
      <div className="button-box ml-8 my-5 flex flex-col justify-between ">
        <SideBarButton label={"Home"} iconSrc={"/search-icon.svg"} />
        <SideBarButton label={"Liked"} iconSrc={"/search-icon.svg"} />
        <SideBarButton label={"Saved"} iconSrc={"/search-icon.svg"} />
        <SideBarButton label={"LIve"} iconSrc={"/search-icon.svg"} />
      </div>
      <hr className="mx-5" />
      <div className="button-box ml-8 my-5 flex flex-col justify-between  ">
        <SideBarButton label={"Recent Liked"} iconSrc={"/search-icon.svg"} />
        <SideBarButton label={"or newsletter"} iconSrc={"/search-icon.svg"} />
        <SideBarButton label={"Space"} iconSrc={"/search-icon.svg"} />
        <SideBarButton label={"LIve"} iconSrc={"/search-icon.svg"} />
      </div>
      <hr className="mx-5" />
      <div className="button-box ml-8 my-5 flex flex-col justify-between text-red-400">
        <SideBarButton
          label={"logout"}
          onClick={logoutHandler}
          iconSrc={"/search-icon.svg"}
        />
      </div>
    </div>
  );
}
