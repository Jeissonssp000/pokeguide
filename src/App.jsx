import { BrowserRouter } from "react-router-dom";
import { InfoContextProvider } from "./context/InfoContext";
import MainRouter from "./routes/MainRouter";

function App() {
  return (
    <InfoContextProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </InfoContextProvider>
  );
}

export default App;
