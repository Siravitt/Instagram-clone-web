export default function Input({type, placeholder, name}) {
  return (
    <div className="w-[268px] h-[36px] mt-2">
      <input
        className="w-full h-full px-2 text-[12px] border border-gray-300 rounded-md"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}
