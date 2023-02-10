import useAuth from "../../hooks/useAuth";

export default function ProfileName({showMenu}) {
  const { userData } = useAuth();
  return (
    <div className="pt-3 px-4 w-full h-[50px] bg-white flex justify-between sticky top-0">
      <div className="text-lg font-bold">{userData?.userName}</div>
      <button onClick={showMenu}>
        <i className="fa-solid fa-bars fa-xl"></i>
      </button>
    </div>
  );
}
