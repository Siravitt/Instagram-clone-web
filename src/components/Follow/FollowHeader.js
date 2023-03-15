import { useNavigate } from "react-router-dom";

export default function FollowHeader({name}) {
  const navigate = useNavigate()
  return (
    <div className="w-full h-[45px] flex items-center justify-center relative">
      <div className="font-bold text-[14px]">{name}</div>
      <button onClick={() => navigate(-1)} className="absolute top-[10px] left-[10px]">
        <i className="fa-solid fa-chevron-left fa-xl"></i>
      </button>
    </div>
  );
}
