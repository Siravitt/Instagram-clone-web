export default function StoryContainer() {
  return (
    <div className="w-full h-[85px] gap-2 px-2 flex items-center overflow-x-auto scrollbar-hide">
      <button className="shrink-0 w-[56px] h-[56px] bg-red-200 rounded-full relative">
        <img
          src="https://images.unsplash.com/photo-1502790671504-542ad42d5189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
          className="object-cover w-full h-full rounded-full"
        />
        <div className="w-[14px] h-[14px] text-white rounded-full bg-blue-700 absolute bottom-0 right-0 flex items-center">
          <i className="fa-solid fa-plus"></i>
        </div>
      </button>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
      <div className="shrink-0 w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
    </div>
  );
}
