import React, { useState } from "react";
import "../layout/M-layout.css"; // CSS ต้องอยู่ในโฟลเดอร์เดียวกับไฟล์นี้

// Import Components
import AssignmentInfo from "../Assignment/assignment_info";
import AssignmentNearly from "../Assignment/assignmentnearly";
import Calendar from "../Calendar/calendar";

function MechanicPages() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState("MechanicPages");
  const [isInNearlyPlace, setIsInNearlyPlace] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleLogoutPopup = () => setShowLogoutPopup(!showLogoutPopup);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setShowMenu(false);
    setIsInNearlyPlace(false);
  };

  const handleTaskClick = () => {
    setCurrentPage("assignment-info");
  };

  return (
    <div className="M-app">
      <header className="M-header">
        <div className="M-logo"></div>
        <div className="M-notification">
          <i className="bi bi-envelope-fill icon-mail"></i>
        </div>
        <button className="logout-button" onClick={toggleLogoutPopup}></button>
      </header>

      {showLogoutPopup && (
        <>
          <div className="overlay" onClick={toggleLogoutPopup}></div>
          <div className="logout-popup">
            <p>LOG OUT?</p>
            <button
              className="logout-confirm"
              onClick={() => console.log("Logged Out")}
            >
              YES
            </button>
            <button className="logout-cancel" onClick={toggleLogoutPopup}>
              NO
            </button>
          </div>
        </>
      )}

      <main className="content">
        {currentPage === "MechanicPages" && (
          <div className="assignment">
            <h2>Assignment</h2>
            <div className="task-card" onClick={handleTaskClick}>
              <div className="task-icon"></div>
              <div className="task-details">
                <span>Place</span>
                <div className="task-due-finish">
                  <div className="due-date">
                    <span className="label">due date</span>
                    <span className="value">01/01/2001</span>
                  </div>
                  <label className="finish">
                    <span className="label">finish</span>
                    <input type="checkbox" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPage === "assignment-info" && (
          <AssignmentInfo onReturn={handlePageChange} />
        )}

        {currentPage === "assignment-nearly" && (
          <AssignmentNearly setIsInNearlyPlace={setIsInNearlyPlace} />
        )}

        {currentPage === "calendar" && <Calendar />}
      </main>

      {!isInNearlyPlace && currentPage !== "assignment-info" && (
        <button className="menu-button" onClick={toggleMenu}></button>
      )}

      {showMenu && (
        <>
          <div className="overlay" onClick={toggleMenu}></div>
          <div className="menu-popup">
            <button className="close-button" onClick={toggleMenu}>
              <i className="bi bi-x"></i>
            </button>
            <div
              className={`menu-item ${
                currentPage === "MechanicPages" ? "active" : ""
              }`}
              onClick={() => handlePageChange("MechanicPages")}
            >
              <span>Assignment</span>
            </div>
            <div
              className={`menu-item ${
                currentPage === "assignment-nearly" ? "active" : ""
              }`}
              onClick={() => handlePageChange("assignment-nearly")}
            >
              <span>Assignment Nearly</span>
            </div>
            <div
              className={`menu-item ${
                currentPage === "calendar" ? "active" : ""
              }`}
              onClick={() => handlePageChange("calendar")}
            >
              <span>Calendar</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MechanicPages;
