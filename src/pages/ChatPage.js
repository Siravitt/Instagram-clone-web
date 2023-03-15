import ChatHeader from "../components/Chat/ChatHeader";
import ChatSearch from "../components/Chat/ChatSearch";

export default function ChatPage() {
  return (
    <div className="bg-white w-[390px] h-screen mx-auto flex flex-col gap-2">
      <ChatHeader />
      <ChatSearch />
      <div className="font-bold px-4">Messages</div>
    </div>
  );
}
