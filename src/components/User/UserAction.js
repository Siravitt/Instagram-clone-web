import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIsFollow } from "../../apis/follow-api";

export default function UserAction({ userProfile, ifFollow, ifUnFollow }) {
  const { id } = useParams();
  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    const fetchIsFollow = async () => {
      const res = await getIsFollow(id);
      setIsFollow(res.data.isFollow);
    };
    fetchIsFollow();
  }, [id, userProfile.follower]);

  return (
    <>
      <div className="w-full h-[45px] px-4 text-[12px] flex items-center justify-center gap-2 font-bold">
        {!isFollow ? (
          <button
            onClick={ifFollow}
            className="flex-1 h-[25px] rounded-lg flex items-center justify-center border border-white bg-blue-600 text-white hover:bg-blue-400 duration-300"
          >
            Follow
          </button>
        ) : (
          <button
            onClick={ifUnFollow}
            className="flex-1 h-[25px] rounded-lg flex items-center justify-center border border-black bg-gray-200 text-black hover:bg-gray-400 duration-200"
          >
            Following
          </button>
        )}
        <button className="flex-1 h-[25px] rounded-lg border border-black">
          Message
        </button>
      </div>
      <div className="w-full sticky bg-white top-0 h-[45px] flex items-center justify-center gap-2">
        <button className="flex-1 h-full border-b border-black">
          <i className="fa-solid fa-image fa-xl"></i>
        </button>
        <button className="flex-1 h-full">
          <i className="fa-solid fa-circle-user fa-xl"></i>
        </button>
      </div>
    </>
  );
}
