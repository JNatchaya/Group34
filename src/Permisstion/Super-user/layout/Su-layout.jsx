import { useState, useRef, useEffect } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import DepartmentMangement_tab from "../Department-management/Department-management";
import StaffManagement_tab from "../staff-management/staff-management";
import KeyGen from "../Key-gen/key-gen";
import Report from "../Report/report";
import Logout from "../../../assets/Log-out/logout";
import MailPopup from "../../../assets/mail-popup/mail";

import "./Su-layout.css";

function Super_user_pages({ setToken }) {
  const [sutab, setSutab] = useState("Department_Management");
  const userContainerRef = useRef(null);
  const logoutRef = useRef(null);
  const [toggleLogout, setToggleLogout] = useState(false);
  const [showMailPopup, setShowMailPopup] = useState(false);

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
    <div>
      <div className="Sa-pages-container starter">
        <header className="header">
          <div className="logo"></div>
          <div className="user-sec">
          
            <div
              className="user-container"
              ref={userContainerRef}
              onClick={handleLeftClick} 
            >
              <label className="username">Superuser</label>
              <div className="pofile-picture"></div>
            </div>
          </div>
        </header>
        <main className="body">
          <nav className="sidebar">
            <NavLink
              to="Department_Management"
              className={`Child ${
                sutab === "Department_Management" ? "active" : ""
              }`}
              onClick={() => setSutab("Department_Management")}
            >
              Department management<span className="bi bi-caret-right-fill"></span>
            </NavLink>
            <NavLink
              to="Staff_Management"
              className={`Child ${
                sutab === "Staff_Management" ? "active" : ""
              }`}
              onClick={() => setSutab("Staff_Management")}
            >
              Staff Management<span className="bi bi-caret-right-fill"></span>
            </NavLink>
            <NavLink
              to="key_generator"
              className={`Child ${
                sutab === "key_generator" ? "active" : ""
              }`}
              onClick={() => setSutab("key_generator")}
            >
              Key Generator <span className="bi bi-caret-right-fill"></span>
            </NavLink>
            <NavLink
              to="report"
              className={`Child ${sutab === "report" ? "active" : ""}`}
              onClick={() => setSutab("report")}
            >
              Report <span className="bi bi-caret-right-fill"></span>
            </NavLink>
          </nav>
          <div className="container-box">
            <Routes>
              {/* Default redirect to "Department Management" */}
              <Route path="/" element={<Navigate to="Department_Management" />} />
              <Route
                path="Department_Management"
                element={<DepartmentMangement_tab />}
              />
              <Route path="Staff_Management" element={<StaffManagement_tab />} />
              <Route path="key_generator" element={<KeyGen />} />
              <Route path="report" element={<Report />} />
            </Routes>
          </div>
        </main>
        {toggleLogout && (
            <div ref={logoutRef}>
              <Logout setToggleLogout={setToggleLogout} setToken={setToken} />
            </div>
          )}
          <MailPopup trigger={showMailPopup} setTrigger={setShowMailPopup} />
      </div>
    </div>
  );
}

export default Super_user_pages;

