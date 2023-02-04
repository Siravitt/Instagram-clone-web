import CurrentPageContextProvider from "./contexts/CurrentPageContext";
import Router from "./routes/Router";

function App() {
  return (
    <CurrentPageContextProvider>
      <Router />
    </CurrentPageContextProvider>
  );
}

export default App;
