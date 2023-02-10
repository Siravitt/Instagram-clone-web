import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function PostName({ friend }) {
  const { userData } = useAuth();
  return (
    <div className="flex items-center justify-between">
      <Link
        to={userData?.id === friend?.id ? "/profile" : `/user/${friend?.id}`}
        className="h-full flex items-center gap-2"
      >
        <img
          src={friend?.profileImage || process.env.REACT_APP_BLANK_USER}
          alt=""
          className="w-[30px] h-[30px] object-cover inline-block rounded-full ml-2"
        />
        <div className="inline-block font-bold text-[12px]">{friend?.userName || "Instaguay user"}</div>
      </Link>
      <button className="pr-4">
        <i className="fa-solid fa-ellipsis"></i>
      </button>
    </div>
  );
}
