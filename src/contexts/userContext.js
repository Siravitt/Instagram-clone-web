import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [data, setData] = useState(null);
  const fetchUser = (input) => setData(input);
  return (
    <UserContext.Provider value={{ data, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
}
