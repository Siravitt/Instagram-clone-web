import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PostAction from "../components/Post/PostAction";
import PostName from "../components/Post/PostName";

export default function PostPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-[390px] h-full bg-white mx-auto flex flex-col gap-4 pb-[55px]"
    >
      <div className="w-full h-[50px] px-4 border-b flex items-center justify-between">
        <Link to={-1} className="">
          <i className="fa-solid fa-chevron-left fa-xl"></i>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <div className="text-[12px]">Earthcodec</div>
          <div className="font-bold text-[15px]">Posts</div>
        </div>
        <Link to={-1} className="invisible">
          <i className="fa-solid fa-chevron-left fa-xl"></i>
        </Link>
      </div>
      <div className="w-full h-full flex flex-col gap-4">
        <PostName />
        <div className="w-full h-[400px] bg-gray-400"></div>
        <div>
          <div className="w-full h-[40px] flex gap-3 pl-2 -mt-[15px]">
            <PostAction />
          </div>
          <div className="ml-2 flex gap-2 mt-1">
            <div className="text-[12px] font-bold">Earthcodec</div>
            <div className="text-[12px]">Hello world</div>
          </div>
          <div className="ml-2">
            <button className="text-[12px] text-gray-400">
              View all comment
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
