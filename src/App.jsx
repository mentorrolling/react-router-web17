import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./views/HomeScreen";
import AboutScreen from "./views/AboutScreen";
import Error404Screen from "./views/Error404Screen";
// import NavBarApp from "./components/NavBarApp";
import PagesLayout from "./layout/PagesLayout";
import RoutesPrincipal from "./routes/RoutesPrincipal";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <RoutesPrincipal />
        {/* <NavBarApp /> */}
        {/* <Routes>
        <Route path="/" element={<PagesLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="*" element={<Error404Screen />} />
        </Route>
      </Routes> */}
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
