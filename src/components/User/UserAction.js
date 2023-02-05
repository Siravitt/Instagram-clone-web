export default function UserAction() {
  return (
    <>
      <div className="w-full h-[45px] px-4 text-[12px] flex items-center justify-center gap-2 font-bold">
        <button className="flex-1 h-[25px] rounded-lg border border-black flex items-center justify-center">
          Follow
        </button>
        <button className="flex-1 h-[25px] rounded-lg border border-black">
          Message
        </button>
      </div>
      <div className="w-full h-[45px] flex items-center justify-center gap-2">
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
