import { useState } from "react";
import ChatInput from "../components/Chat/ChatInput";
import OnChatHeader from "../components/Chat/OnChatHeader";
import socket from "../configs/socket";

export default function OnChatPage() {
  const [input, setInput] = useState("");
  const onType = (e) => setInput(e.target.value);
  const hldSubmitForm = async (e) => {
    try {
      e.preventDefault();
      socket.emit("send_chat", {})
      setInput("");
    } catch (err) {
      console.log(err.data?.response);
    }
  };
  return (
    <div className="w-[390px] h-full mx-auto bg-white">
      <OnChatHeader />
      <ChatInput value={input} onChange={onType} onSubmit={hldSubmitForm} />
    </div>
  );
}
