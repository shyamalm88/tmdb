import React from "react";
import { Outlet } from "react-router";
import Header from "./header";

export const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </React.Fragment>
  );
};
