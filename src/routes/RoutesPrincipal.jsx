import { Routes, Route } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import PagesLayout from "../layout/PagesLayout";
import AboutScreen from "../views/AboutScreen";
import Error404Screen from "../views/Error404Screen";
import LoginScreen from "../views/LoginScreen";
import ProductScreen from "../views/ProductScreen";
import ProtectedRoutes from "./ProtectedRoutes";

const RoutesPrincipal = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <PagesLayout />
          </ProtectedRoutes>
        }
      >
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="product/:id" element={<ProductScreen />} />
        {/* localhost:9001/product/12 */}
        <Route path="*" element={<Error404Screen />} />
      </Route>
      <Route path="login" element={<LoginScreen />} />
    </Routes>
  );
};

export default RoutesPrincipal;
