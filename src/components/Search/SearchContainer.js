import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { searchApi } from "../../apis/search-api";
import useUser from "../../hooks/useUser";

export default function SearchContainer() {
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const { fetchUser } = useUser();

  useEffect(() => {
    let time;
    if (search !== "") {
      time = setTimeout(async () => {
        const res = await searchApi({ search });
        setResult(res.data.newUser);
        fetchUser(res.data.newUser);
      }, 500);
    } else {
      setResult([]);
    }
    return () => clearTimeout(time);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return (
    <>
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
            id={el.id}
          />
        ))}
      </div>
    </>
  );
}
