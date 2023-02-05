export default function UserData({image}) {
  return (
    <>
      <div className="w-[390px] h-[100px] flex items-center px-6 gap-8">
        <div className="shrink-0 w-[80px] h-[80px] bg-gray-400 rounded-full">
          <img
            src={image}
            alt=""
            className="w-[80px] h-[80px] rounded-full border-2 object-cover"
          />
        </div>
        <div className="w-full h-full px-5 flex items-center justify-end gap-4">
          <div className="flex flex-col items-center text-[12px]">
            <div className="font-bold">5</div>
            <div>Posts</div>
          </div>
          <div className="flex flex-col items-center text-[12px]">
            <div className="font-bold">0</div>
            <div>Followers</div>
          </div>
          <div className="flex flex-col items-center text-[12px]">
            <div className="font-bold">0</div>
            <div>Following</div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto"></div>
    </>
  );
}
