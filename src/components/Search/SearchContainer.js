import { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import { searchApi } from "../../apis/search-api";
import { getSearchResult } from "../../utils/local-storage";

export default function SearchContainer() {
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(getSearchResult() || []);

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
          <button
            className="mx-4 pr-2 text-blue-600"
            type="button"
            onClick={() => setSearch("")}
          >
            Cancel
          </button>
        )}
      </div>
      <div className="w-full h-auto mt-8 px-4 flex flex-col gap-2">
        {result?.length === 0 ? (
          <div className="w-full h-full mt-10 opacity-50 flex flex-col items-center justify-center gap-4">
            <div>
              <img
                src="https://st.depositphotos.com/2868925/3523/v/450/depositphotos_35237803-stock-illustration-search-icon-vector-set.jpg"
                alt=""
                className="h-[200px] w-[200px]"
              />
            </div>
            <div className="text-[30px] font-bold">No results found</div>
          </div>
        ) : (
          result.map((el) => (
            <SearchResult
              key={el.id}
              userName={el.userName}
              profileImage={el.profileImage}
              id={el.id}
            />
          ))
        )}
      </div>
    </>
  );
}
