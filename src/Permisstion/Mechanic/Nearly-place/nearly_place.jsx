import React from "react";
import "../layout/M-layout.css";
import "../Assignment/assignmentnearly.css";

function NearlyPlace({ onReturn, onTaskClick }) {
  return (
    <div className="nearly-place-container">
      <h2>Assignment Nearly</h2>
      <div className="place-section">
        <h3>Place</h3>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="task-card2"
            onClick={onTaskClick} // ไปหน้า AssignmentInfo
          >
            <span className="task-title">Fire extinguisher Serial number {index + 1}</span>
            <label className="finish">
              <span className="label">Finish</span>
              <input type="checkbox" />
            </label>
          </div>
        ))}
      </div>

      <button
        className="return-button"
        onClick={onReturn} //กลับไป AssignmentNearly
      >
        Return
      </button>
    </div>
  );
}

export default NearlyPlace;
