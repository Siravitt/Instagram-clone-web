import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProfileName from "./ProfileName";
import ProfileData from "./ProfileData";
import ProfilePhotoContainer from "./ProfilePhotoContainer";

export default function ProfileContainer() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state?.prevPath === "/edit-profile") {
      return () => {
        window.history.replaceState({}, document.title);
        navigate(0);
      }}
  });
  return (
    <>
      <ProfileName />
      <ProfileData />
      <div className="w-full h-auto"></div>
      <div className="w-full h-[45px] px-4 text-[12px] flex items-center justify-center gap-2 font-bold">
        <Link
          to="/edit-profile"
          className="flex-1 h-[25px] rounded-lg border border-black flex items-center justify-center"
        >
          Edit profile
        </Link>
        <button className="flex-1 h-[25px] rounded-lg border border-black">
          Share profile
        </button>
      </div>
      <div className="w-full h-[45px] flex items-center justify-center gap-2">
        <button className="flex-1 h-full border-b border-black">
          <i className="fa-solid fa-image fa-xl"></i>
        </button>
        <button className="flex-1 h-full">
          <i className="fa-solid fa-circle-user fa-xl"></i>
        </button>
      </div>
      <ProfilePhotoContainer />
    </>
  );
}
