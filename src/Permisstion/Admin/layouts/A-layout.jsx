import { useCombinedData } from "../../../DATA/CombinedDataContext";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import Assignment from "../Assignment/assignment";
import User from "../User/user";
import Logout from "../../../assets/Log-out/logout"
import MailPopup from "../../../assets/mail-popup/mail";
import "./A-layout.css";

function Admin_pages({ setToken}) {
  const [atab, setAtab] = useState("Assignment");
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
    <div className="Sa-pages-container starter">
      <header className="header">
        <div className="logo"></div>
        <div className="user-sec">
          <span className="bi bi-envelope-fill mailbox"
            onClick={() => setShowMailPopup(true)} 
            ></span>
          <div
              className="user-container"
              ref={userContainerRef}
              onClick={handleLeftClick} 
            >
            <label className="username">Admin Pages</label>
            <div className="pofile-picture"></div>
          </div>
        </div>
      </header>
      <main className="body">
        <nav className="sidebar"> {/* Changed 'nev' to 'nav' */}
          <NavLink
            to="Assignment"
            className={`Child ${atab === "Assignment" ? "active" : ""}`}
            onClick={() => setAtab("Assignment")}
          >
            Assignment <span className="bi bi-caret-right-fill"></span>
          </NavLink>
          <NavLink
            to="User"
            className={`Child ${atab === "User" ? "active" : ""}`}
            onClick={() => setAtab("User")}
          >
            User <span className="bi bi-caret-right-fill"></span>
          </NavLink>
        </nav>
          <div className="container-box">
            <Routes>
              {/* Default redirect to "Assignment" */}
              <Route path="/" element={<Navigate to="Assignment" />} />
              <Route path="Assignment" element={<Assignment />} />
              <Route path="User" element={<User />} />
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
  );
}

export default Admin_pages;

