export default function FollowData({
  showFollow,
  following,
  follower,
  showFollower,
  showFollowing,
}) {
  return (
    <div className="w-full h-[40px] px-4 flex items-center justify-between border-b">
      <button
        onClick={showFollower}
        className={` text-[12px] font-bold ${
          showFollow === 1 ? "text-black" : "text-gray-400"
        }`}
      >
        {follower?.length} Followers
      </button>
      <button
        onClick={showFollowing}
        className={` text-[12px] font-bold ${
          showFollow === 2 ? "text-black" : "text-gray-400"
        }`}
      >
        {following?.length} Following
      </button>
      <div className="text-[12px] font-bold text-gray-400">Subscriptions</div>
    </div>
  );
}
