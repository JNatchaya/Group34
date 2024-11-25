import React from "react";
import mAssignData from "../../../DATA/m-assignData";
import "../layout/M-layout.css";
import "../Assignment/assignmentnearly.css";

function AssignmentNearly({ onTaskClick, setSelect }) {
  const handleTaskClick = (place) => {
    setSelect(place);
    onTaskClick(place);
  };

  return (
    <div className="assignment-nearly-container">
      <div className="assignment-nearly">
        <h2>Assignment Nearly</h2>
        {mAssignData
          .filter((task) => !task.holder)
          .map((task, index) => (
            <div
              key={index}
              className="task-card"
              onClick={() => handleTaskClick(task.place)}
            >
              <div className="task-icon"></div>
              <div className="task-details">
                <span>{task.place}</span>
                <div className="task-holder">
                  <label className="finish">
                    <span className="label">Holder</span>
                    <input type="checkbox" checked={task.holder} readOnly />
                  </label>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AssignmentNearly;
