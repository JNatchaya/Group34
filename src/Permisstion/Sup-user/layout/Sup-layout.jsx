import { useState, useRef } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Department_Management from "../Department/department-mangement";
import Report from "../../Super-user/Report/report";
import Logout from "../../../assets/Log-out/logout"

function Sup_user_pages({ setToken }) {
  const [suptab, setSuptab] = useState("Department_Management"); // Default tab
  const userContainerRef = useRef(null);
  const [toggleLogout, setToggleLogout] = useState(false);

  const handleRightClick = (event) => {
    event.preventDefault();
    if (!toggleLogout) {
      setToggleLogout(true); // Only set toggleLogout if it's not already true
    }
  };

  return (
    <div>
      <div className="Sa-pages-container starter">
        <header className="header">
          <div className="logo"></div>
          <div className="user-sec">
            <span className="bi bi-envelope-fill"></span>
            <div
              className="user-container"
              ref={userContainerRef}
              onContextMenu={handleRightClick}
            >
              <label className="username">Superadmin</label>
              <div className="pofile-picture"></div>
            </div>
          </div>
        </header>
        <main className="body">
          <nav className="sidebar">
            <NavLink
              to="Department_Management"
              className={`Child ${suptab === "Department_Management" ? "active" : ""}`}
              onClick={() => {
                if (suptab !== "Department_Management") {
                  setSuptab("Department_Management"); // Update state only if necessary
                }
              }}
            >
              Department Management{" "}
              <span className="bi bi-caret-right-fill"></span>
            </NavLink>
            <NavLink
              to="report"
              className={`Child ${suptab === "report" ? "active" : ""}`}
              onClick={() => {
                if (suptab !== "report") {
                  setSuptab("report"); // Update state only if necessary
                }
              }}
            >
              Report <span className="bi bi-caret-right-fill"></span>
            </NavLink>
          </nav>
          <div className="container-box">
            <Routes>
              <Route path="/" element={<Navigate to="Department_Management" />} />
              <Route path="Department_Management" element={<Department_Management />} />
              <Route path="report" element={<Report />} />
            </Routes>
          </div>
          {toggleLogout && (
            <Logout setToggleLogout={setToggleLogout} setToken={setToken} />
          )}
        </main>
      </div>
    </div>
  );
}

export default Sup_user_pages;
