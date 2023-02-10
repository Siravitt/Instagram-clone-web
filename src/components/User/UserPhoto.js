export default function UserPhoto({ title, image }) {
  return (
      <button className="w-[129px] h-[129px] bg-gray-400">
        <img src={image} alt="" className="w-[129px] h-[129px] object-cover" />
      </button>
  );
}
