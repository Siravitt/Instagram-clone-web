import { useEffect, useState } from "react";
import SearchResult from "../components/Search/SearchResult";
import { searchApi } from "../apis/search-api";

export default function SearchPage() {
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    let time;
    if (search !== "") {
      time = setTimeout(async () => {
        console.log("aaa");
        const res = await searchApi({ search });
        setResult(res.data.newUser);
      }, 500);
    } else {
      setResult([]);
    }
    return () => clearTimeout(time);
  }, [search]);

  return (
    <div className="w-[390px] h-[845px] mx-auto bg-white overflow-y-auto">
      <div className="w-full h-[45px] pt-[20px] flex items-center justify-center">
        <input
          type="text"
          value={search}
          className="w-full mx-2 rounded-lg py-1 px-4 border-2 transition"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) => setSearch(e.target.value)}
        />
        {focus && (
          <button className="mx-4 pr-2 text-blue-600" type="button">
            Cancel
          </button>
        )}
      </div>
      <div className="w-full h-auto mt-8 px-4 flex flex-col gap-2">
        {result?.map((el) => (
          <SearchResult
            key={el.id}
            userName={el.userName}
            profileImage={el.profileImage}
          />
        ))}
      </div>
    </div>
  );
}
