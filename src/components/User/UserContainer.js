import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import UserAction from "./UserAction";
import UserName from "./UserName";
import UserData from "./UserData";
import UserPhoto from "./UserPhoto";
import { getUserData } from "../../apis/user-api";
import { onFollow, onUnFollow } from "../../apis/follow-api";
import { searchById } from "../../apis/search-api";
import socket from "../../configs/socket";
import useAuth from "../../hooks/useAuth";

export default function UserContainer() {
  const { id } = useParams();
  const { userData } = useAuth();
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState([]);
  const [userProfile, setUserProfile] = useState({
    posts: [],
    following: [],
    follower: [],
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserData({ id });
        setUserProfile({
          ...userProfile,
          posts: res.data.posts,
          following: res.data.follow.filter((el) => +el.followerId === +id),
          follower: res.data.follow.filter((el) => +el.followingId === +id),
        });
        const resUser = await searchById(id);
        setUserDetail(resUser.data.newUser);
      } catch (err) {
        navigate("/profile");
      }
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const ifFollow = async () => {
    try {
      const newProfile = structuredClone(userProfile);
      newProfile.follower.push("new follow");
      await onFollow({ id });
      socket.emit("send_follow", { to: id, from: userData?.userName });
      setUserProfile(newProfile);
    } catch (err) {
      console.log(err.data?.response);
      toast.error("Cannot follow this user");
    }
  };

  const ifUnFollow = async () => {
    try {
      const newProfile = structuredClone(userProfile);
      newProfile.follower.pop();
      await onUnFollow(id);
      setUserProfile(newProfile);
    } catch (err) {
      console.log(err.data?.response);
      toast.error("Cannot unfollow this user");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-[390px] h-fit min-h-screen mx-auto bg-white flex flex-col pb-[50px]"
    >
      <UserName name={userDetail.userName} />
      <UserData image={userDetail.profileImage} userProfile={userProfile} id={id} />
      <UserAction
        userProfile={userProfile}
        ifFollow={ifFollow}
        ifUnFollow={ifUnFollow}
      />
      <div className="w-full flex flex-wrap gap-[1.5px]">
        {userProfile.posts?.map((el) => (
          <UserPhoto key={el.id} userId={el.userId} postId={el.id} image={el.image} />
        ))}
      </div>
    </motion.div>
  );
}
