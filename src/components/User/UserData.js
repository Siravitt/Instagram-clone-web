export default function UserData({ image, userProfile }) {
  return (
    <>
      <div className="w-[390px] h-[100px] flex items-center px-6 gap-8">
        <div className="shrink-0 w-[80px] h-[80px] bg-white rounded-full">
          <img
            src={image || process.env.REACT_APP_BLANK_USER}
            alt=""
            className="w-[80px] h-[80px] rounded-full border-2 object-cover"
          />
        </div>
        <div className="w-full h-full px-5 flex items-center justify-end gap-4">
          <div className="flex flex-col items-center text-[12px]">
            <div className="font-bold">{userProfile.posts?.length}</div>
            <div>Posts</div>
          </div>
          <div className="flex flex-col items-center text-[12px]">
            <div className="font-bold">
              {userProfile.follower?.length === 0 ? "0" : userProfile.follower?.length}
            </div>
            <div>Followers</div>
          </div>
          <div className="flex flex-col items-center text-[12px]">
            <div className="font-bold">
              {userProfile.following?.length === 0
                ? "0"
                : userProfile.following?.length}
            </div>
            <div>Following</div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto"></div>
    </>
  );
}
