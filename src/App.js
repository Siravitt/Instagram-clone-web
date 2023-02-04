import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CurrentPageContextProvider from "./contexts/CurrentPageContext";
import Router from "./routes/Router";

function App() {
  return (
    <CurrentPageContextProvider>
      <Router />
      <ToastContainer position="bottom-center" autoClose={2000} theme="light" />
    </CurrentPageContextProvider>
  );
}

export default App;
