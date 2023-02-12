import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getIsFollow, onFollow, onUnFollow } from "../../apis/follow-api";
import socket from "../../configs/socket";
import useAuth from "../../hooks/useAuth";

export default function LikeList({ name, image, id }) {
  const [isFollow, setIsFollow] = useState(false);
  const { userData } = useAuth();

  useEffect(() => {
    const fetchIsFollow = async () => {
      const res = await getIsFollow(id);
      setIsFollow(res.data.isFollow);
    };
    fetchIsFollow();
  }, [id]);

  const hldClickFollow = async () => {
    await onFollow({ id });
    socket.emit("send_follow", { to: id, from: userData?.userName });
    setIsFollow(true);
  };

  const hldClickUnFollow = async () => {
    await onUnFollow(id);
    setIsFollow(false);
  };

  return (
    <div className="w-full h-[50px] px-4 flex items-center gap-4 relative">
      <div className="bg-white w-[50px] h-[50px] rounded-full">
        <img
          src={image || process.env.REACT_APP_BLANK_USER}
          alt=""
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
      </div>
      <Link
        to={id === userData?.id ? "/profile" : `/user/${id}`}
        className="text-[12px] font-bold"
      >
        {name}
      </Link>
      {id === userData?.id ? null : (
        <div className="w-[100px] h-[25px] absolute right-[25px] rounded-lg">
          {!isFollow ? (
            <button
              onClick={hldClickFollow}
              className="w-[100px] h-[25px] rounded-lg text-[12px] text-white font-bold bg-blue-600 hover:bg-blue-400 duration-200"
            >
              Follow
            </button>
          ) : (
            <button
              onClick={hldClickUnFollow}
              className="w-[100px] h-[25px] rounded-lg text-[12px] font-bold bg-gray-200 hover:bg-gray-400 duration-200"
            >
              Following
            </button>
          )}
        </div>
      )}
    </div>
  );
}
