import { Link } from "react-router-dom";

export default function SearchResult({ userName, profileImage, id }) {
  return (
    <Link
      to={`/user/${id}`}
      className="w-full h-[45px] flex items-center gap-4"
    >
      <div className="w-[45px] h-[45px] rounded-full bg-white">
        <img
          className="w-[45px] h-[45px] rounded-full object-cover"
          src={profileImage || process.env.REACT_APP_BLANK_USER}
          alt=""
        />
      </div>
      <div className="text-[12px] font-bold">{userName}</div>
    </Link>
  );
}
