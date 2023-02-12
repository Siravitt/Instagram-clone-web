import ProfilePhoto from "./ProfilePhoto";

export default function ProfilePhotoContainer({ photos }) {
  return (
    <div className="w-full h-auto flex flex-wrap gap-[1.5px] overflow-y-auto scrollbar-hide">
      {photos?.map((el) => (
        <ProfilePhoto key={el.id} src={el.image} title={el.title} id={el.id} />
      ))}
    </div>
  );
}
