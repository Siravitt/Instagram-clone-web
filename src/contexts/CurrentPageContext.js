import { createContext, useState } from "react";

export const CurrentPageContext = createContext();

export default function CurrentPageContextProvider({ children }) {
  const location = window.location.pathname
  console.log(location);
  const pages = () =>{
    if (location === "/") return 1
    else if (location === "/search") return 2
    else if (location === "/chat") return 3
    else if (location === "/profile") return 4
  }
  const [current, setCurrent] = useState(pages);
  const currentPage = (page) => setCurrent(page);
  return (
    <CurrentPageContext.Provider value={{ current, currentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
}
