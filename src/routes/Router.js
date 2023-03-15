import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import CreatePostPage from "../pages//CreatePostPage";
import ChatPage from "../pages/ChatPage";
import ProfilePage from "../pages/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage";
import NotificationPage from "../pages/NotificationPage";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import UserPage from "../pages/UserPage";
import LikePage from "../pages/LikePage";
import PostPage from "../pages/PostPage";
import CommentPage from "../pages/CommentPage";
import FollowPage from "../pages/FollowPage";
import OnChatPage from "../pages/OnChatPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: "/register",
    element: (
      <RedirectIfAuthenticate>
        <RegisterPage />
      </RedirectIfAuthenticate>
    ),
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
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
        element: <CreatePostPage />,
      },
      {
        path: "/post/:userId/:postId",
        element: <PostPage />,
      },
      {
        path: "/comment/:postId",
        element: <CommentPage />,
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
        element: <UserPage />,
      },
      {
        path: "/edit-profile",
        element: <EditProfilePage />,
      },
      {
        path: "/:postId/like",
        element: <LikePage />,
      },
      {
        path: "/follow/:userId",
        element: <FollowPage />,
      },
      {
        path: "/chat/:userId",
        element: <OnChatPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
