import { Link } from "react-router-dom";
import useCurrentPage from "../hooks/useCurrentPage";
import homeIconActive from "../images/homeIconActive.svg";
import homeIconUnactive from "../images/homeIconUnactive.svg";
import searchActive from "../images/searchActive.svg";
import searchUnactive from "../images/searchUnactive.svg";
import useAuth from "../hooks/useAuth";

export default function NavbarLayout() {
  const { current, currentPage } = useCurrentPage();
  const { userData } = useAuth();
  return (
    <div className="w-[390px] h-[50px] mx-auto sticky bottom-0 bg-white">
      <div className="w-full h-full flex items-center justify-evenly">
        <Link to="/" className="w-[25px] h-[25px]">
          {current === 1 ? (
            <img src={homeIconActive} alt="homeIcon" className="object-cover" />
          ) : (
            <img
              src={homeIconUnactive}
              alt="homeIcon"
              className="object-cover"
              onClick={() => currentPage(1)}
            />
          )}
        </Link>
        <Link to="/search" className="w-[25px] h-[25px]">
          {current === 2 ? (
            <img src={searchActive} alt="searchIcon" className="object-cover" />
          ) : (
            <img
              src={searchUnactive}
              alt="searchIcon"
              className="object-cover"
              onClick={() => currentPage(2)}
            />
          )}
        </Link>
        <Link to="/post">
          <i className="fa-regular fa-square-plus fa-lg"></i>
        </Link>
        <Link to="/chat" onClick={() => currentPage(3)}>
          <i
            className={`fa-${
              current === 3 ? "solid" : "regular"
            } fa-message fa-lg`}
          ></i>
        </Link>
        <div className="w-[22px] h-[22px] bg-gray-400 rounded-full">
          <Link
            to="/profile"
            className="w-full h-full"
            onClick={() => currentPage(4)}
          >
            <img
              src={userData?.profileImage}
              alt=""
              className={`object-cover w-full h-full rounded-full border-2 border-${
                current === 4 ? "white ring" : "black"
              }`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
