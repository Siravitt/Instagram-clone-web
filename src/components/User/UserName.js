import { Link } from "react-router-dom";

export default function UserName({ name }) {
  return (
    <div className="w-full h-[45px] px-4 flex items-center justify-between">
      <Link to="/search">
        <i className="fa-solid fa-chevron-left fa-xl"></i>
      </Link>
      <div className="font-bold text-[14px]">{name}</div>
      <button>
        <i className="fa-solid fa-ellipsis fa-xl"></i>
      </button>
    </div>
  );
}
