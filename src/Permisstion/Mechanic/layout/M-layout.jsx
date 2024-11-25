import React, { useState } from "react";
import mAssignData from "../../../DATA/m-assignData";
import "../layout/M-layout.css";
import "../../Guest/G-dashboard/G-dashboard.css";
import Logout from "../../../assets/Log-out/logout";

import AssignmentInfo from "../Assignment/assignment_info";
import AssignmentNearly from "../Assignment/assignmentnearly";
import Calendar from "../Calendar/calendar";
import NearlyPlace from "../Nearly-place/nearly_place";
import GDashboard from "../../Guest/G-dashboard/G-dashboard";
import MailPopup from "../../../assets/mail-popup/mail"; 

function MechanicPages({ setToken }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showMailPopup, setShowMailPopup] = useState(false); // State for MailPopup
  const [currentPage, setCurrentPage] = useState("MechanicPages");
  const [isInNearlyPlace, setIsInNearlyPlace] = useState(false);
  const [lastPage, setLastPage] = useState("MechanicPages");
  const [select, setSelect] = useState("");

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleLogoutPopup = () => setShowLogoutPopup(!showLogoutPopup);
  const toggleMailPopup = () => setShowMailPopup(!showMailPopup); // Toggle MailPopup

  const handlePageChange = (page) => {
    setLastPage(currentPage);
    setCurrentPage(page);
    setShowMenu(false);
    setIsInNearlyPlace(false);
  };

  const handleTaskClick = () => {
    setLastPage(currentPage);
    setCurrentPage("assignment-info");
  };

  
  const unfinishedTasks = mAssignData
    .flatMap((assignment) =>
      assignment.data.map((task) => ({ ...task, place: assignment.place }))
    )
    .filter((task) => !task.finished);

  const uniquePlaces = [];
  const filteredTasks = unfinishedTasks.filter((task) => {
    if (uniquePlaces.includes(task.place)) {
      return false;
    }
    uniquePlaces.push(task.place);
    return true;
  });

  return (
    <div
      className={`M-app ${currentPage === "guest" ? "g-dashboard-mode" : ""}`}
    >
      {currentPage !== "guest" && (
        <header className="M-header">
          <div className="M-logo"></div>
          <div className="M-notification" onClick={toggleMailPopup}>
            <i className="bi bi-envelope-fill icon-mail"></i>
          </div>
          <button
            className="logout-button"
            onClick={toggleLogoutPopup}
          ></button>
        </header>
      )}

      {showLogoutPopup && (
        <>
          <div className="overlay" onClick={toggleLogoutPopup}></div>
          <div className="m-logout-popup">
            <p>LOG OUT?</p>
            <button
              className="m-logout-confirm"
              onClick={() => {
                setShowLogoutPopup(false);
                setToken("");
                window.location.href = "#/";
              }}
            >
              YES
            </button>
            <button
              className="m-logout-cancel"
              onClick={() => setShowLogoutPopup(false)}
            >
              NO
            </button>
          </div>
        </>
      )}

      {showMailPopup && (
        <div className="mail-popup">
        <div className="mail-popup-header">
        <div className="M-logo"></div>
        <button className="m-close-button" onClick={() => setShowMailPopup(false)}>
        <i className="bi bi-x-circle"></i>
        </button>
        </div>
        <div className="mail-popup-content">
          <div className="notification-card">
            <div className="circle"></div>
            <div className="content"><p>From admin | <br /> Message details...</p></div>
          </div>
          <div className="notification-card">
            <div className="circle"></div>
            <div className="content"><p>From admin | <br /> Message details...</p></div>
          </div>
          <div className="notification-card">
            <div className="circle"></div>
            <div className="content"><p>From admin | <br /> Message details...</p></div>
          </div>
        </div>
        <button className="m-show-more-button">Show more</button>
      </div>
      
      
      )}

      <main
        className={`content ${
          currentPage === "guest" ? "g-dashboard-content" : ""
        }`}
      >
        {currentPage === "MechanicPages" && (
          <div className="M-assignment">
            <h2>Assignments</h2>
            {filteredTasks.map((task) => (
              <div
                className="task-card"
                key={task.place}
                onClick={handleTaskClick}
              >
                <div className="task-icon"></div>
                <div className="task-details">
                  <span>{task.place}</span>
                  <div className="task-due-finish">
                    <div className="due-date">
                      <span className="label">due date</span>
                      <span className="value">{task.dueDate}</span>
                    </div>
                    <label className="finish">
                      <span className="label">finish</span>
                      <input type="checkbox" checked={task.finished} readOnly />
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {currentPage === "assignment-info" && (
          <AssignmentInfo onReturn={() => handlePageChange(lastPage)} />
        )}

        {currentPage === "assignment-nearly" && (
          <AssignmentNearly
            setIsInNearlyPlace={setIsInNearlyPlace}
            onTaskClick={() => handlePageChange("nearly-place")}
            setSelect={setSelect}
          />
        )}

        {currentPage === "nearly-place" && (
          <NearlyPlace
            onReturn={() => handlePageChange("assignment-nearly")}
            onTaskClick={() => handlePageChange("assignment-info")}
            select={select}
          />
        )}

        {currentPage === "calendar" && (
          <Calendar onDateClick={() => handlePageChange("MechanicPages")} />
        )}

        {currentPage === "guest" && (
          <GDashboard
            onReturnToMechanic={() => handlePageChange("MechanicPages")}
          />
        )}
      </main>

      {currentPage !== "guest" &&
        currentPage !== "assignment-info" &&
        currentPage !== "nearly-place" && (
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
            <div
              className={`menu-item ${currentPage === "guest" ? "active" : ""}`}
              onClick={() => handlePageChange("guest")}
            >
              <span>Guest</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MechanicPages;
