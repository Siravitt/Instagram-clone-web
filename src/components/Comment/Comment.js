export default function Comment({ title, name, image }) {
  return (
    <div className="w-full h-auto">
      <div className="flex items-center gap-2 px-2 py-3">
        <div className="shrink-0 w-[30px] h-[30px] rounded-full bg-white">
          <img
            className="w-[30px] h-[30px] rounded-full object-cover"
            src={image || process.env.REACT_APP_BLANK_USER}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <div className="text-[10px] font-bold">{name}</div>
          <div className="text-[12px]">{title}</div>
        </div>
      </div>
    </div>
  );
}
