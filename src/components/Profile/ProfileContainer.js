import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileName from "./ProfileName";
import ProfileData from "./ProfileData";
import ProfilePhotoContainer from "./ProfilePhotoContainer";
import useAuth from "../../hooks/useAuth";

export default function ProfileContainer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, userData, posts } = useAuth();
  const [menu, setMenu] = useState(false);
  const showMenu = () => setMenu(true);

  const photos = posts.filter((el) => el.userId === userData?.id);

  useEffect(() => {
    if (location.state?.prevPath === "/edit-profile") {
      return () => {
        window.history.replaceState({}, document.title);
        navigate(0);
      };
    }
  });

  return (
    <>
      <ProfileName showMenu={showMenu} />
      <ProfileData posts={photos.length} />
      <div className="w-full h-auto px-5">
        <div className="text-[12px]">{userData?.bio}</div>
      </div>
      <div className="w-full h-[45px] px-4 text-[12px] flex items-center justify-center gap-2 font-bold">
        <Link
          to="/edit-profile"
          className="flex-1 h-[25px] rounded-lg border border-black flex items-center justify-center hover:bg-gray-200 duration-200"
        >
          Edit profile
        </Link>
        <button className="flex-1 h-[25px] rounded-lg border border-black hover:bg-gray-200 duration-200">
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
      <ProfilePhotoContainer photos={photos} />
      {menu && (
        <div
          className="relative z-50 w-[390px] h-auto "
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-[390px] h-screen mx-auto fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={() => setMenu(false)}
          ></div>
          <div className="w-[390px] h-[300px] fixed fadein bottom-0 transform overflow-hidden rounded-t-lg bg-white text-left shadow-xl transition-all">
            <div className="w-full h-[45px] mt-[25px]">
              <div className="w-full h-full">
                <button className="w-full h-full flex items-center gap-6">
                  <div className="pl-8">
                    <i className="fa-solid fa-gear fa-lg"></i>
                  </div>
                  <div className="w-full h-full border-b text-[14px] flex items-center">
                    Setting
                  </div>
                </button>
              </div>
              <div className="w-full h-full">
                <button
                  className="w-full h-full flex items-center gap-6"
                  onClick={logout}
                >
                  <div className="pl-8">
                    <i className="w-full h-full fa-solid fa-right-from-bracket fa-lg"></i>
                  </div>
                  <div className="w-full h-full border-b text-[14px] text-red-500 font-bold flex items-center">
                    Log out
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
