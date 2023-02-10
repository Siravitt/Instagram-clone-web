import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import useLoading from "./hooks/useLoading";
import Router from "./routes/Router";
import ClipLoader from "react-spinners/ClipLoader";
import socket from "./configs/socket";
import useAuth from "./hooks/useAuth";

function App() {
  const { userData, posts } = useAuth();
  const { loading } = useLoading();

  useEffect(() => {
    if (userData) {
      socket.auth = { id: userData?.id };
      socket.connect();
    }
    socket.on("receive_like", ({ text, postId }) => {
      const a = posts.filter((el) => el.id === postId);
      if (a.length !== 0) {
        toast(text);
      }
    });
    socket.on("receive_follow", ({ text }) => {
      toast(text);
    });
    return () => {
      socket.off("receive_like");
      socket.off("receive_follow");
      socket.disconnect();
    };
  }, [posts, userData]);

  return (
    <>
      {loading && (
        <div className="w-full h-screen bg-[#191919] fixed top-0 left-0 z-[100]">
          <div className="w-[390px] h-screen mx-auto bg-opacity-80 bg-gray-100 flex items-center justify-center">
            <ClipLoader
              color="#000"
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      )}
      <Router />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="light"
        hideProgressBar={true}
        draggableDirection="y"
        draggablePercent={60}
      />
    </>
  );
}

export default App;
