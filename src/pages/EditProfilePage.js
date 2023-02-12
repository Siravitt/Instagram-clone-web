import { motion } from "framer-motion";
import EditProfileForm from "../components/Edit/EditProfileForm";

export default function EditProfilePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full bg-[#191919]"
    >
      <EditProfileForm />
    </motion.div>
  );
}
