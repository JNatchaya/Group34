import { useState, useRef, useEffect } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import StaffManagement_tab from "../staffmanage/staffmanage";
import C_management_tab from "../C.management/c.management";
import Map from "../map/map";
import Keygen from "../key-gen/key-gen";
import Stock from "../stock/stock-manage";
import Logout from "../../../assets/Log-out/logout"

import "./Sa-layout.css";

function SuperAdmin_pages({ setToken }) {
  const [satab, setSatab] = useState("C_management"); 
  const userContainerRef = useRef(null);
  const logoutRef = useRef(null);
  const [toggleLogout, setToggleLogout] = useState(false);

  const handleLeftClick = () => {
    setToggleLogout((prevState) => !prevState); 
  };

  const handleClickOutside = (event) => {
    if (
      toggleLogout &&
      logoutRef.current &&
      !logoutRef.current.contains(event.target) &&
      userContainerRef.current &&
      !userContainerRef.current.contains(event.target)
    ) {
      setToggleLogout(false); 
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleLogout]);

  return (
    <div className="Sa-pages-container starter">
      <header className="header">
        <div className="logo"></div>
        <div className="user-sec">
          <span className="bi bi-envelope-fill"></span>
          <div
              className="user-container"
              ref={userContainerRef}
              onClick={handleLeftClick} 
            >
            <label className="username">Superadmin</label>
            <div className="pofile-picture"></div>
          </div>
        </div>
      </header>
      <main className="body">
        <div className="sidebar">
          {/* Dynamic tab links with NavLink */}
          <NavLink
            to="C_management"
            className={`Child ${satab === "C_management" ? "active" : ""}`}
            onClick={() => setSatab("C_management")}
          >
            Client management{" "}
            <span className="bi bi-caret-right-fill"></span>
          </NavLink>
          <NavLink
            to="staff-management"
            className={`Child ${satab === "staff-management" ? "active" : ""}`}
            onClick={() => setSatab("staff-management")}
          >
            Staff Management <span className="bi bi-caret-right-fill"></span>
          </NavLink>
          <NavLink
            to="stock"
            className={`Child ${satab === "stock" ? "active" : ""}`}
            onClick={() => setSatab("stock")}
          >
            Stock <span className="bi bi-caret-right-fill"></span>
          </NavLink>
          <NavLink
            to="key_generator"
            className={`Child ${satab === "key_generator" ? "active" : ""}`}
            onClick={() => setSatab("key_generator")}
          >
            Key Generator <span className="bi bi-caret-right-fill"></span>
          </NavLink>
          <NavLink
            to="map"
            className={`Child ${satab === "map" ? "active" : ""}`}
            onClick={() => setSatab("map")}
          >
            Map <span className="bi bi-caret-right-fill"></span>
          </NavLink>
        </div>

        <div className="container-box">
          {/* Default redirect route */}
          <Routes>
            <Route path="/" element={<Navigate to="C_management" />} />{" "}
            {/* Default redirect */}
            <Route path="C_management" element={<C_management_tab />} />
            <Route path="staff-management" element={<StaffManagement_tab />} />
            <Route path="stock" element={<Stock />} />
            <Route path="key_generator" element={<Keygen />} />
            <Route path="map" element={<Map />} />
          </Routes>
        </div>
      </main>
      {toggleLogout && (
            <div ref={logoutRef}>
              <Logout setToggleLogout={setToggleLogout} setToken={setToken} />
            </div>
          )}
    </div>
  );
}

export default SuperAdmin_pages;
