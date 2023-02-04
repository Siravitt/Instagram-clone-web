import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CurrentPageContextProvider from "./contexts/currentPageContext";
import useLoading from "./hooks/useLoading";
import Router from "./routes/Router";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const { loading } = useLoading();
  return (
    <CurrentPageContextProvider>
      {loading && (
        <div className="w-full h-full bg-[#191919]">
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
      <ToastContainer position="bottom-center" autoClose={2000} theme="light" />
    </CurrentPageContextProvider>
  );
}

export default App;
