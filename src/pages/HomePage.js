import { Link } from "react-router-dom";
import StoryContainer from "../components/Home/StoryContainer";
import PostContainer from "../components/Post/PostContainer";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-[390px] h-screen mx-auto bg-white overflow-y-auto scrollbar-hide pb-[50px]"
    >
      <div className="w-full h-[60px] sticky top-0 flex items-center justify-between bg-white z-50">
        <div className="w-[105px] h-[30px] ml-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1600px-Instagram_logo.svg.png?20160616034027"
            alt="logo"
          />
        </div>
        <Link to="/notification" className="mr-4 pt-1">
          <i className="fa-regular fa-heart fa-lg"></i>
        </Link>
      </div>
      <div className="border"></div>
      <StoryContainer />
      <PostContainer />
    </motion.div>
  );
}
