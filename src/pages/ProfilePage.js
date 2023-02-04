import { Link } from "react-router-dom";

export default function ProfilePage() {
  return (
    <div className="w-[390px] h-screen mx-auto bg-white flex flex-col">
      <div className="pt-3 px-4 w-full h-[50px] bg-white flex justify-between sticky top-0">
        <div className="text-lg font-bold">flamesiravittt</div>
        <button>
          <i className="fa-solid fa-bars fa-xl"></i>
        </button>
      </div>
      <div className="w-[390px] h-[100px] flex items-center px-6 gap-8">
        <div className="shrink-0 w-[80px] h-[80px] bg-gray-400 rounded-full">
          <img
            src="https://images.unsplash.com/photo-1502790671504-542ad42d5189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
            className="w-[80px] h-[80px] rounded-full"
          />
        </div>
        <div className="w-full h-full px-5 flex items-center justify-end gap-4">
          <div className="flex flex-col items-center text-[12px]">
            <div className="font-bold">5</div>
            <div>Posts</div>
          </div>
          <div className="flex flex-col items-center text-[12px]">
            <div className="font-bold">0</div>
            <div>Followers</div>
          </div>
          <div className="flex flex-col items-center text-[12px]">
            <div className="font-bold">0</div>
            <div>Following</div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto"></div>
      <div className="w-full h-[45px] px-4 text-[12px] flex items-center justify-center gap-2 font-bold">
        <Link to="/edit-profile" className="flex-1 h-[25px] rounded-lg border border-black flex items-center justify-center">
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
      <div className="w-full h-auto flex flex-wrap gap-[1.5px] overflow-y-auto scrollbar-hide">
        <button className="w-[129px] h-[129px] bg-gray-400"></button>
        <button className="w-[129px] h-[129px] bg-gray-400"></button>
        <button className="w-[129px] h-[129px] bg-gray-400"></button>
        <button className="w-[129px] h-[129px] bg-gray-400"></button>
        <button className="w-[129px] h-[129px] bg-gray-400"></button>
      </div>
    </div>
  );
}
