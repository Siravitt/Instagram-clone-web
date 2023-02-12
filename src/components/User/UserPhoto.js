import { Link } from "react-router-dom";

export default function UserPhoto({ userId, postId, image }) {
  return (
    <Link
      to={`/post/${userId}/${postId}}`}
      className="w-[129px] h-[129px] bg-gray-400"
    >
      <img src={image} alt="" className="w-[129px] h-[129px] object-cover" />
    </Link>
  );
}
