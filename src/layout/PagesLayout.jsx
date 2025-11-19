import React from "react";
import { Outlet } from "react-router-dom";
import NavBarApp from "../components/NavBarApp";

const PagesLayout = () => {
  return (
    <>
      <header>
        <NavBarApp />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default PagesLayout;
