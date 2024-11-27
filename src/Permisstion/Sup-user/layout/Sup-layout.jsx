import { useState, useRef, useEffect } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Department_Management from "../Department/department-mangement";
import Report from "../../Super-user/Report/report";
import Logout from "../../../assets/Log-out/logout"
import MailPopup from "../../../assets/mail-popup/mail";

function Sup_user_pages({ setToken }) {
  const [suptab, setSuptab] = useState("Department_Management"); // Default tab
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

export default Sup_user_pages;
