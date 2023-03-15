import { useState, useEffect } from "react";
import { searchApi } from "../../apis/search-api";
import ChatSearchList from "./ChatSearchList";

export default function ChatSearch() {
  const [onFocus, setOnFocus] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    let time;
    if (search !== "") {
      time = setTimeout(async () => {
        const res = await searchApi({ search });
        setResult(res.data.newUser);
      }, 500);
    }
    return () => clearTimeout(time);
  }, [search]);

  return (
    <>
      <div className="shrink-0 w-full h-[30px] px-4 flex items-center gap-2">
        <input
          onClick={() => setOnFocus(true)}
          className="px-4 w-full h-full border rounded-lg text-[14px] focus:outline-none"
          placeholder="&#xF002; Search"
          style={{ fontFamily: "Arial, FontAwesome" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {onFocus ? (
          <button
            onClick={() => {
              setOnFocus(false);
              setSearch("");
            }}
            className="text-blue-600 text-[14px] hover:text-blue-300 duration-200"
          >
            Cancel
          </button>
        ) : null}
      </div>
      {onFocus ? (
        <div className="w-full h-full flex flex-col gap-4 fadein pt-4">
          {result.map((el) => (
            <ChatSearchList key={el.id} id={el.id} name={el.userName} image={el.profileImage}/>
          ))}
        </div>
      ) : null}
    </>
  );
}
