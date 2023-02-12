import { createContext, useEffect, useState } from "react";
import * as authApi from "../apis/auth-api";
import {
  getAccessToken,
  removeAccessToken,
  removeSearchResult,
  setAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  );

  useEffect(() => {
    if (authenticatedUser) {
      fetchAuthUser();
    }
  }, [authenticatedUser]);

  const fetchAuthUser = async () => {
    const res = await authApi.getMe();
    setUserData(res.data.user);
  };

  const login = async (input) => {
    const res = await authApi.login(input);
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(true);
  };

  const logout = () => {
    removeSearchResult();
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ authenticatedUser, login, logout, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
}
