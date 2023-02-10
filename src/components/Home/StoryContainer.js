import useAuth from "../../hooks/useAuth";

export default function StoryContainer() {
  const { userData } = useAuth();
  return (
    <div className="w-full h-[85px] gap-2 px-2 flex items-center overflow-x-auto scrollbar-hide">
      <button className="shrink-0 w-[56px] h-[56px] rounded-full relative">
        <img
          src={userData?.profileImage || process.env.REACT_APP_BLANK_USER}
          alt=""
          className="object-cover w-full h-full rounded-full ring"
        />
        <div className="w-[14px] h-[14px] text-white rounded-full bg-blue-700 absolute bottom-0 right-0 flex items-center">
          <i className="fa-solid fa-plus"></i>
        </div>
      </button>
      {/* <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div> */}
    </div>
  );
}
