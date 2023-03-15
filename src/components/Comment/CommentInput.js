import useAuth from "../../hooks/useAuth";

export default function CommentInput({ value, onChange, onSubmit }) {
  const { userData } = useAuth();
  return (
    <div className="w-[390px] h-[50px] px-4 bg-white flex items-center gap-2 fixed bottom-[50px]">
      <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-white">
        <img
          className="w-[40px] h-[40px] rounded-full object-cover"
          src={userData?.profileImage || process.env.REACT_APP_BLANK_USER}
          alt=""
        />
      </div>
      <form className="w-full h-[40px]" onSubmit={onSubmit}>
        <input
          className="rounded-full w-full h-[40px] pl-4 pr-10  border text-[12px] focus:outline-none"
          type="text"
          placeholder="Add a comment"
          value={value}
          onChange={onChange}
        />
        <button className="absolute inset-y-0 right-7 flex items-center text-[12px] font-bold text-blue-600">
          Post
        </button>
      </form>
    </div>
  );
}
