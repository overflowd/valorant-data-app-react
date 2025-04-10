import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
