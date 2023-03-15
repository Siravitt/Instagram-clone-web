import { useEffect, useState } from "react";
import { getAllFollow } from "../../apis/follow-api";
import { useNavigate, useParams } from "react-router-dom";
import FollowData from "./FollowData";
import FollowHeader from "./FollowHeader";
import FollowList from "./FollowList";

export default function FollowContainer() {
  const { userId } = useParams();
  const navigate = useNavigate()
  const [showFollow, setShowFollow] = useState(1);
  const [follow, setFollow] = useState([]);

  useEffect(() => {
    const fetchFollow = async () => {
      try {
        const res = await getAllFollow(userId);
        setFollow(res.data.follow);
      } catch (err) {
        console.log(err.data?.response);
        navigate("/profile")
      }
    };
    fetchFollow();
  }, [navigate, userId]);

  const showFollower = () => setShowFollow(1);
  const showFollowing = () => setShowFollow(2);

  const following = follow.filter((el) => +el.followerId === +userId);
  const follower = follow.filter((el) => +el.followingId === +userId);
  const user = follow.filter((el) => +el.follower.id === +userId);

  return (
    <>
      <FollowHeader name={user[0]?.follower.userName} />
      <FollowData
        showFollow={showFollow}
        following={following}
        follower={follower}
        showFollower={showFollower}
        showFollowing={showFollowing}
      />
      <div className="w-full h-full mt-4 flex flex-col gap-4">
        {showFollow === 1
          ? follower.map((el) => (
              <FollowList
                key={el.id}
                id={el.follower?.id}
                name={el.follower.userName}
                image={el.follower.profileImage}
              />
            ))
          : following.map((el) => (
              <FollowList
                key={el.id}
                id={el.following?.id}
                name={el.following.userName}
                image={el.following.profileImage}
              />
            ))}
      </div>
    </>
  );
}
