import { Link } from "react-router-dom";

export default function ChatSearchList({ name, image, id }) {
  return (
    <Link to={`/chat/${id}`} className="w-full h-[40px] px-4 flex gap-4">
      <div className="shrink-0 w-[40px] h-[40px] rounded-full bg-white">
        <img
          className="w-[40px] h-[40px] rounded-full object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="w-full h-full flex items-center text-[12px] font-bold">
        {name}
      </div>
    </Link>
  );
}
