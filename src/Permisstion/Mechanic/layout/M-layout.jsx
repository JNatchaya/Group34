import React, { useState } from "react";
import "../layout/M-layout.css";

// Import Components
import AssignmentInfo from "../Assignment/assignment_info";
import AssignmentNearly from "../Assignment/assignmentnearly";
import Calendar from "../Calendar/calendar";
import NearlyPlace from "../Nearly-place/nearly_place";

function MechanicPages() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState("MechanicPages");
  const [isInNearlyPlace, setIsInNearlyPlace] = useState(false);
  const [lastPage, setLastPage] = useState("MechanicPages");

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleLogoutPopup = () => setShowLogoutPopup(!showLogoutPopup);

  const handlePageChange = (page) => {
    setLastPage(currentPage); // หน้าล่าสุด
    setCurrentPage(page);
    setShowMenu(false);
    setIsInNearlyPlace(false);
  };

  const handleTaskClick = () => {
    setLastPage(currentPage); //หน้าล่าสุด
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
          <div className="M-assignment">
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
          <AssignmentInfo onReturn={() => handlePageChange(lastPage)} />
        )}

        {currentPage === "assignment-nearly" && (
          <AssignmentNearly
            setIsInNearlyPlace={setIsInNearlyPlace}
            onTaskClick={() => handlePageChange("nearly-place")}
          />
        )}

        {currentPage === "nearly-place" && (
          <NearlyPlace
            onReturn={() => handlePageChange("assignment-nearly")}
            onTaskClick={() => handlePageChange("assignment-info")}
          />
        )}

        {currentPage === "calendar" && (
          <Calendar onDateClick={() => handlePageChange("MechanicPages")} />
        )}
      </main>

      {/* ซ่อนปุ่มเมนูเมื่ออยู่ในหน้า nearly-place */}
      {!isInNearlyPlace && currentPage !== "assignment-info" && currentPage !== "nearly-place" && (
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
