export default function PostCaption({title, name}) {
  return (
    <div className="ml-2 flex gap-2 mt-1">
      <div className="text-[12px] font-bold">{name}</div>
      <div className="text-[12px]">{title}</div>
    </div>
  );
}
