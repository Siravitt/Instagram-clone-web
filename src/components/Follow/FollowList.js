import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function FollowList({ image, name, id }) {
  const { userData } = useAuth();
  return (
    <Link
      to={userData?.id === id ? "/profile" : `/user/${id}`}
      className="w-full h-[50px] px-4 flex items-center gap-4"
    >
      <div className="w-[50px] h-[50px] rounded-full bg-white">
        <img
          className="w-[50px] h-[50px] rounded-full object-cover"
          src={image || process.env.REACT_APP_BLANK_USER}
          alt=""
        />
      </div>
      <div className="text-[12px] font-bold">{name}</div>
    </Link>
  );
}
