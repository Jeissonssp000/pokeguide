import { BrowserRouter } from "react-router-dom";
import { InfoContextProvider } from "./context/InfoContext";
import { ModalContextProvider } from "./context/ModalContext";
import MainRouter from "./routes/MainRouter";

function App() {
  return (
    <InfoContextProvider>
      <ModalContextProvider>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </ModalContextProvider>
    </InfoContextProvider>
  );
}

export default App;
