import { Link } from "react-router-dom";

export default function EditProfileForm() {
  return (
    <form className="w-[390px] h-screen mx-auto bg-white">
      <div className="w-full h-[45px] flex items-center justify-between px-2 text-[14px] border-b">
        <Link to="/profile">Cancel</Link>
        <div className="font-bold">Edit profile</div>
        <button className="font-bold text-blue-600">Done</button>
      </div>
      <div className="w-full h-[150px] flex flex-col items-center gap-4 py-4 border-b">
        <div className="shrink-0 w-[80px] h-[80px] bg-gray-400 rounded-full"></div>
        <input type="file" id="selectedFile" className="hidden"></input>
        <button
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
            className="w-full h-full flex items-center border-b focus:border-none"
            placeholder="flamesiravittt"
          ></input>
        </div>
        <div className="w-full h-[50px] flex items-center text-[14px]">
          <div className="pr-[85.5px]">Bio</div>
          <input
            className="w-full h-full flex items-center border-b focus:border-none"
            placeholder="Bio"
          ></input>
        </div>
      </div>
    </form>
  );
}
