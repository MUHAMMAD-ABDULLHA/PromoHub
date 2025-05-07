import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../Layout.css";

function Layout({ children }) {
  const location = useLocation();
  // Hide the sidebar on login and registration pages
  const hideSidebar = location.pathname === "/login" || location.pathname === "/registration";

  return (
    <div className="layout">
      {!hideSidebar && <Sidebar />}
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default Layout;
