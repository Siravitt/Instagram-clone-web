import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import PostPage from "../pages/PostPage";
import ChatPage from "../pages/ChatPage";
import ProfilePage from "../pages/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage";
import NotificationPage from "../pages/NotificationPage";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import UserPage from "../pages/UserPage";
import UserContextProvider from "../contexts/userContext";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />,
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: "/register",
    element: (
      <RedirectIfAuthenticate>
        <RegisterPage />,
      </RedirectIfAuthenticate>
    ),
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />,
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: (
          <UserContextProvider>
            <SearchPage />,
          </UserContextProvider>
        ),
      },
      {
        path: "/post",
        element: <PostPage />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/notification",
        element: <NotificationPage />,
      },
      {
        path: "/user/:id",
        element: (
          <UserContextProvider>
            <UserPage />,
          </UserContextProvider>
        ),
      },
    ],
  },
  {
    path: "/edit-profile",
    element: (
      <ProtectedRoute>
        <EditProfilePage />,
      </ProtectedRoute>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
