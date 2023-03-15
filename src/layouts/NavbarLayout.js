import { Link, useLocation } from "react-router-dom";
// import homeIconActive from "../images/homeIconActive.svg";
// import homeIconUnactive from "../images/homeIconUnactive.svg";
// import searchActive from "../images/searchActive.svg";
// import searchUnactive from "../images/searchUnactive.svg";
import useAuth from "../hooks/useAuth";

export default function NavbarLayout() {
  const { userData } = useAuth();
  const location = useLocation();
  return (
    <div className="w-[390px] h-[50px] mx-auto fixed -translate-x-1/2 left-1/2 bottom-0 bg-white border-t">
      <div className="w-full h-full flex items-center justify-evenly">
        {/* <Link to="/" className="w-[25px] h-[25px]">
          {location.pathname === "/" ? (
            <img src={homeIconActive} alt="homeIcon" className="object-cover" />
          ) : (
            <img
              src={homeIconUnactive}
              alt="homeIcon"
              className="object-cover"
            />
          )}
        </Link> */}
        {/* <Link to="/search" className="w-[25px] h-[25px]">
          {location.pathname === "/search" ? (
            <img src={searchActive} alt="searchIcon" className="object-cover" />
          ) : (
            <img
              src={searchUnactive}
              alt="searchIcon"
              className="object-cover"
            />
          )}
        </Link> */}
        <Link to="/post">
          <i
            className={`fa-${
              location.pathname === "/post" ? "solid" : "regular"
            } fa-square-plus fa-lg`}
          ></i>
        </Link>
        <Link to="/chat">
          <i
            className={`fa-${
              location.pathname === "/chat" ? "solid" : "regular"
            } fa-message fa-lg`}
          ></i>
        </Link>
        <div className="w-[22px] h-[22px] rounded-full">
          <Link
            to="/profile"
            className="w-full h-full"
          >
            <img
              src={userData?.profileImage || process.env.REACT_APP_BLANK_USER}
              alt=""
              className={`object-cover w-full h-full rounded-full border-2 border-${
                location.pathname === "/profile" ? "white ring" : "black"
              }`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
