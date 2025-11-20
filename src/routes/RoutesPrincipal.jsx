import { Route, Routes } from "react-router-dom";
import ViewsLayout from "../layout/ViewsLayout";
import HomeScreen from "../views/HomeScreen";
import AboutScreen from "../views/AboutScreen";
import Error404Screen from "../views/Error404Screen";
import LoginScreen from "../views/LoginScreen";

const RoutesPrincipal = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewsLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="*" element={<Error404Screen />} />
      </Route>
      <Route path="login" element={<LoginScreen />} />
    </Routes>
  );
};

export default RoutesPrincipal;
