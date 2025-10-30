import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default MainLayout;
