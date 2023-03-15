import {Link} from "react-router-dom"

export default function CommentHeader() {
  return (
    <div className="w-full h-[50px] flex items-center justify-between px-4 border-b">
      <Link to="/">
        <i className="fa-solid fa-chevron-left fa-xl"></i>
      </Link>
      <div className="text-[16px] font-bold">Comments</div>
      <button>
        <i className="fa-regular fa-paper-plane fa-lg"></i>
      </button>
    </div>
  );
}
