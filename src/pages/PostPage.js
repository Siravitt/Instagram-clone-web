import { motion } from "framer-motion";
import OnePostContainer from "../components/Post/OnePostContainer";

export default function PostPage() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-[390px] h-full bg-white mx-auto flex flex-col gap-4 pb-[55px]"
    >
      <OnePostContainer />
    </motion.div>
  );
}
