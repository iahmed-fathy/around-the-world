import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import ErrorPage from "./pages/ErrorPage";
import AppContextProvider from "./AppContext";

function App() {
  return (
    <AppContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path=":countryID" element={<DetailsPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </AppContextProvider>
  );
}

export default App;
