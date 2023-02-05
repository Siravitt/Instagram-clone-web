export default function ProfilePhoto({src, title}) {
  return (
    <button className="w-[129px] h-[129px] bg-gray-400">
      <img src={src} alt="" className="w-[129px] h-[129px] object-cover"/>
    </button>
  );
}
