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

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
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
    ],
  },
  {
    path: "/edit-profile",
    element: <EditProfilePage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
