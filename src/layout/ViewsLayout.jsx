import { Outlet } from "react-router-dom";
import NavBarApp from "../components/NavBarApp";

const ViewsLayout = () => {
  return (
    <>
      <header>
        <NavBarApp />
      </header>
      <main>
        <Outlet />
      </main>

      <footer>{/* pie de página  */}</footer>
    </>
  );
};

export default ViewsLayout;
