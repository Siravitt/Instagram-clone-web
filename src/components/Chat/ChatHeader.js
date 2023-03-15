import useAuth from "../../hooks/useAuth";

export default function ChatHeader() {
  const { userData } = useAuth();
  return (
    <div className="w-full h-[50px] flex items-center border-b">
      <div className="px-4 flex items-center gap-4">
        <button className="">
          <i className="fa-solid fa-chevron-left fa-xl"></i>
        </button>
        <div className="font-bold text-[20px]">{userData?.userName}</div>
      </div>
      <div className=""></div>
    </div>
  );
}
