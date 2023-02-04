export default function SearchResult({userName, profileImage}) {
  return (
    <div className="w-full h-[45px] flex items-center gap-4">
      <div className="w-[45px] h-[45px] rounded-full bg-gray-400">
        <img className="w-[45px] h-[45px] rounded-full object-cover" src={profileImage} alt=""/>
      </div>
      <div className="text-[12px] font-bold">{userName}</div>
    </div>
  );
}
