import ProfileContainer from "../components/Profile/ProfileContainer";
import { motion } from "framer-motion";

export default function ProfilePage() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-[390px] h-fit min-h-screen mx-auto bg-white flex flex-col pb-[50px]"
    >
      <ProfileContainer />
    </motion.div>
  );
}
