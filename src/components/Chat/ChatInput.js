export default function ChatInput({ value, onChange, onSubmit }) {
  return (
    <div className="w-[390px] h-[40px] px-4 bg-white fixed bottom-[55px]">
      <button className="w-[30px] h-[30px] text-white absolute inset-y-0 left-[20px] top-[5px] bg-blue-600 rounded-full">
        <i className="fa-solid fa-camera"></i>
      </button>
      <form className="w-full h-full" onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          className="w-full h-full px-10 rounded-full border text-[14px] focus:outline-none"
        />
        <button className="text-[12px] font-bold text-blue-600 absolute inset-y-0 right-[25px]">
          Send
        </button>
      </form>
    </div>
  );
}
