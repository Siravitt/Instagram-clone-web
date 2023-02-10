import { createContext, useEffect, useState } from "react";
import * as authApi from "../apis/auth-api";
import {
  getAccessToken,
  removeAccessToken,
  removeSearchResult,
  setAccessToken,
} from "../utils/local-storage";
import { getAllPost } from "../apis/post-api";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  );

  useEffect(() => {
    if (authenticatedUser) {
      fetchAuthUser();
      fetchPost();
    }
  }, [authenticatedUser]);

  const fetchAuthUser = async () => {
    const res = await authApi.getMe();
    setUserData(res.data.user);
  };

  const fetchPost = async () => {
    const res = await getAllPost();
    setPosts(res.data.allPosts);
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
      value={{ authenticatedUser, login, logout, userData, posts, fetchPost }}
    >
      {children}
    </AuthContext.Provider>
  );
}
