import { useNavigate } from "react-router-dom";

export default function OnChatHeader() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[50px] px-4 flex items-center gap-4 border-b bg-white">
      <button onClick={() => navigate(-1)}>
        <i className="fa-solid fa-chevron-left fa-xl"></i>
      </button>
      <div className="flex items-center gap-2">
        <div className="w-[25px] h-[25px] rounded-full bg-gray-400"></div>
        <div className="text-[12px] font-bold">earthcodec</div>
      </div>
    </div>
  );
}
