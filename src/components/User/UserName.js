import { useNavigate } from "react-router-dom";

export default function UserName({ name }) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[45px] px-4 flex items-center justify-between">
      <button onClick={() => navigate(-1)}>
        <i className="fa-solid fa-chevron-left fa-xl"></i>
      </button>
      <div className="font-bold text-[14px]">{name}</div>
      <button>
        <i className="fa-solid fa-ellipsis fa-xl"></i>
      </button>
    </div>
  );
}
