import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import CustomNavbar from "./components/CustomNavbar";
import { LoadingContextProvider } from "./context/loading";
import { ODataContextProvider } from "./context/OData";

function App() {
  return (
    <ODataContextProvider>
      <LoadingContextProvider>
        <div className="App">
          <CustomNavbar />
          <Home />
          <Loading />
        </div>
      </LoadingContextProvider>
    </ODataContextProvider>
  );
}

export default App;
