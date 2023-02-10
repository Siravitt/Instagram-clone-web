import { motion } from "framer-motion";
import LikeContainer from "../components/Like/LikeContainer";

export default function LikePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-[390px] h-full bg-white mx-auto flex flex-col gap-4 pb-[55px]"
    >
      <LikeContainer />
    </motion.div>
  );
}
