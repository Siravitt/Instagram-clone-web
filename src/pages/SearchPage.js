import SearchContainer from "../components/Search/SearchContainer";
import { motion } from "framer-motion";

export default function SearchPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-[390px] h-[845px] mx-auto bg-white overflow-y-auto"
    >
      <SearchContainer />
    </motion.div>
  );
}
