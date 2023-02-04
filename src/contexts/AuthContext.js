import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import * as authApi from "../apis/auth-api";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  );
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const res = await authApi.getMe();
      setUserData(res.data.user);
    };
    if (authenticatedUser) {
      fetchAuthUser();
    }
  }, [authenticatedUser]);

  const login = async (input) => {
    const res = await authApi.login(input);
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };

  const logout = () => {
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
