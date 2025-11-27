<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";

=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./views/HomeScreen";
import AboutScreen from "./views/AboutScreen";
import Error404Screen from "./views/Error404Screen";
// import NavBarApp from "./components/NavBarApp";
import PagesLayout from "./layout/PagesLayout";
>>>>>>> dev
import RoutesPrincipal from "./routes/RoutesPrincipal";

const App = () => {
  return (
    <BrowserRouter>
      <RoutesPrincipal />
<<<<<<< HEAD
=======
      {/* <NavBarApp /> */}
      {/* <Routes>
        <Route path="/" element={<PagesLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="*" element={<Error404Screen />} />
        </Route>
      </Routes> */}
>>>>>>> dev
    </BrowserRouter>
  );
};

export default App;
