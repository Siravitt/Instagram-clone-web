export default function CommentTitle({ name, title, image }) {
  return (
    <div className="w-full h-auto">
      <div className="flex justify-center gap-2 px-2 py-4 border-b">
        <div className="shrink-0 w-[30px] h-[30px] rounded-full bg-white">
            <img className="w-[30px] h-[30px] rounded-full object-cover" src={image || process.env.REACT_APP_BLANK_USER} alt=""/>
        </div>
        <div className={`flex flex-col w-full ${title ? "" : "justify-center"}`}>
          <div className={`font-bold ${title ? "text-[10px]" : "text-[12px]"}`}>{name}</div>
          <div className="text-[12px]">{title || ""}</div>
        </div>
      </div>
    </div>
  );
}
