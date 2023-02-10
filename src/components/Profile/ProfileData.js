import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { getMe } from "../../apis/auth-api";

export default function ProfileData({ posts }) {
  const { userData } = useAuth();
  const [followData, setFollowData] = useState([]);

  useEffect(() => {
    const fetchFollow = async () => {
      const res = await getMe();
      setFollowData(res.data.follow);
    };
    fetchFollow();
  }, []);

  const following = followData.filter((el) => el.followerId === userData?.id);
  const follower = followData.filter((el) => el.followingId === userData?.id);

  return (
    <div className="w-[390px] h-[100px] flex items-center px-6 gap-8">
      <div className="shrink-0 w-[80px] h-[80px] rounded-full">
        <img
          src={userData?.profileImage || process.env.REACT_APP_BLANK_USER}
          alt=""
          className="w-[80px] h-[80px] rounded-full border-2 object-cover"
        />
      </div>
      <div className="w-full h-full px-5 flex items-center justify-end gap-4">
        <div className="flex flex-col items-center text-[12px]">
          <div className="font-bold">{posts}</div>
          <div>Posts</div>
        </div>
        <div className="flex flex-col items-center text-[12px]">
          <div className="font-bold">{follower.length}</div>
          <div>Followers</div>
        </div>
        <div className="flex flex-col items-center text-[12px]">
          <div className="font-bold">{following.length}</div>
          <div>Following</div>
        </div>
      </div>
    </div>
  );
}
