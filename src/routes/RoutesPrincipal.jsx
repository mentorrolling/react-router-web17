import { Routes, Route } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import PagesLayout from "../layout/PagesLayout";
import AboutScreen from "../views/AboutScreen";
import Error404Screen from "../views/Error404Screen";
import LoginScreen from "../views/LoginScreen";
import ProtectedRoute from "./ProtectedRoute";
import ProductScreen from "../views/ProductScreen";

const RoutesPrincipal = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <PagesLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="product/:id" element={<ProductScreen />} />
        <Route path="*" element={<Error404Screen />} />
      </Route>
      <Route path="login" element={<LoginScreen />} />
    </Routes>
  );
};

export default RoutesPrincipal;
