import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hook/useAuth";
import { SideBarButton } from "./SideBarButton";
import useMainPageContext from "../hook/useMainPage";

export function SideBar() {
  const { state, dispatch } = useAuthContext();
  const { state: MainPageState, dispatch: MainPageDispatch } =
    useMainPageContext();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    console.log("logout clicked");
    const response = await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    // const result = await response.json();
    // console.log(response);
    if (response.status === 200) {
      dispatch({ type: "SIGNED_OUT" });
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col justify-between ">
      <div className="button-box m-5 flex flex-col justify-between ">
        {mainButtons.map((btn) => (
          <SideBarButton
            key={btn.label}
            label={btn.label}
            iconSrc={btn.iconSrc}
            onClick={() => {
              MainPageDispatch({ type: btn.type });
            }}
          />
        ))}
      </div>

      <hr className="mx-5" />
      <div className="button-box m-5 flex flex-col justify-between  ">
        {secondaryButtons.map((btn) => (
          <SideBarButton
            key={btn.label}
            label={btn.label}
            iconSrc={btn.iconSrc}
            onClick={() => {
              MainPageDispatch({ type: btn.type });
            }}
          />
        ))}
      </div>

      {state.user && (
        <>
          <hr className="mx-5" />
          <div className="button-box ml-8 my-5 flex flex-col justify-between text-red-400">
            <SideBarButton
              label={"logout"}
              onClick={logoutHandler}
              iconSrc={"/search-icon.svg"}
            />
          </div>
        </>
      )}
    </div>
  );
}
//signed in user can access secondary buttons
const secondaryButtons = [
  { label: "You", type: "HOME", iconSrc: "/search-icon.svg" },
  { label: "Liked", type: "LIKED", iconSrc: "/search-icon.svg" },
  { label: "Saved", type: "SAVED", iconSrc: "/search-icon.svg" },
  { label: "Upload", type: "UPLOAD", iconSrc: "/search-icon.svg" },
];

const mainButtons = [
  { label: "tweets", type: "HOME", iconSrc: "/search-icon.svg" },
  { label: "Newsletter", type: "HOME", iconSrc: "/search-icon.svg" },
  { label: "Space", type: "HOME", iconSrc: "/search-icon.svg" },
  { label: "Live", type: "HOME", iconSrc: "/search-icon.svg" },
];
//you page - only followed post, tweets, and newsletters
