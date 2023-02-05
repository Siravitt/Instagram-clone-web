import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import useLoading from "../../hooks/useLoading";
import { editProfile } from "../../apis/edit-api";
import useAuth from "../../hooks/useAuth";

export default function EditProfileForm() {
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const { startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();
  const { userData } = useAuth();

  const hldSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      if (!userName && !profileImage) {
        toast.error("Username or profile image is required");
      }
      if (userName) {
        formData.append("userName", userName);
      }
      if (profileImage) {
        formData.append("profileImage", profileImage);
      }
      startLoading();
      const result = await editProfile(formData);
      if (result.data.edit[0] === 0) {
        toast.error("Cannot edit profile");
      }
      setUserName("");
      setProfileImage(null);
      toast.success("Complete edit");
      navigate("/profile", { state: { prevPath: "/edit-profile" } });
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form
      className="w-[390px] h-screen mx-auto bg-white"
      onSubmit={hldSubmitForm}
    >
      <div className="w-full h-[45px] flex items-center justify-between px-2 text-[14px] border-b">
        <Link to="/profile">Cancel</Link>
        <div className="font-bold">Edit profile</div>
        <button className="font-bold text-blue-600">Done</button>
      </div>
      <div className="w-full h-[150px] flex flex-col items-center gap-4 py-4 border-b">
        <div className="shrink-0 w-[80px] h-[80px] bg-gray-400 rounded-full">
          {profileImage ? (
            <img
              className="w-[80px] h-[80px] object-cover rounded-full"
              src={URL.createObjectURL(profileImage)}
              alt=""
            />
          ) : (
            <img
              className="w-[80px] h-[80px] object-cover rounded-full"
              src={userData?.profileImage}
              alt=""
            />
          )}
        </div>
        <input
          type="file"
          id="selectedFile"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={(e) => setProfileImage(e.target.files[0])}
        ></input>
        <button
          type="button"
          className="text-[12px] font-bold text-blue-600"
          onClick={() => document.getElementById("selectedFile").click()}
        >
          Edit picture
        </button>
      </div>
      <div className="w-full h-auto px-4">
        <div className="w-full h-[50px] flex items-center text-[14px]">
          <div className="pr-10">Username</div>
          <input
            className="w-full h-full flex items-center border-b focus:outline-none"
            placeholder={userData?.userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="w-full h-[50px] flex items-center text-[14px]">
          <div className="pr-[85.5px]">Bio</div>
          <input
            className="w-full h-full flex items-center border-b focus:outline-none"
            placeholder="Bio"
          ></input>
        </div>
      </div>
    </form>
  );
}
