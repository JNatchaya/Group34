import React, { useState } from "react";
import NearlyPlace from "../Nearly-place/nearly_place";
import "../layout/M-layout.css";
import "../Assignment/assignmentnearly.css";

function AssignmentNearly({ setIsInNearlyPlace, onTaskClick }) {
  const handleTaskClick = () => {
    setIsInNearlyPlace(true);
    onTaskClick(); // เปลี่ยนหน้า
  };

  return (
    <div className="assignment-nearly-container">
      <div className="assignment-nearly">
        <h2>Assignment Nearly</h2>
        <div className="task-card" onClick={handleTaskClick}>
          <div className="task-icon"></div>
          <div className="task-details">
            <span>Place</span>
            <div className="task-holder">
              <label className="finish">
                <span className="label">Holder</span>
                <input type="checkbox" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentNearly;
