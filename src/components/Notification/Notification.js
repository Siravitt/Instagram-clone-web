export default function Notification() {
  return (
    <div className="w-full h-[70px] px-4 flex items-center justify-between">
      <div className="w-[50px] h-[50px] bg-gray-400 rounded-full"></div>
      <div className="text-[12px] flex flex-wrap gap-1">
        <div className="font-bold">earthcodec</div>
        <div>started following you</div>
      </div>
      <button className="text-[12px] text-white font-bold bg-blue-600 px-4 py-1 rounded-lg">
        Follow
      </button>
    </div>
  );
}
