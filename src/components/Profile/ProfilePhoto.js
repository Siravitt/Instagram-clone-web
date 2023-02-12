import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function ProfilePhoto({ src, title, id }) {
  const { userData } = useAuth();
  return (
    <Link to={`/post/${userData?.id}/${id}`} className="w-[129px] h-[129px] bg-gray-400">
      <img src={src} alt="" className="w-[129px] h-[129px] object-cover" />
    </Link>
  );
}
