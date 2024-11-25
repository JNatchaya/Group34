import React from "react";
import mAssigmData from "../../../DATA/m-assignData";
import "../layout/M-layout.css";
import "../Assignment/assignmentnearly.css";

function NearlyPlace({ onTaskClick, onReturn , select}) {
  const allData = mAssigmData.filter((task) => task.place === select).flatMap((assignment) => assignment.data.filter((task) => !task.finished));
  console.log("select:", allData ); 

  return (
    <div className="nearly-place-container">
      <h2>Assignments</h2>
      
        {allData.map((item, index) => (
          <div
            key={index}
            className="task-card2"
            onClick={() => onTaskClick(item)} 
          >
            <p>
              <strong></strong> {item.serialNumber}
            </p>
            <div className="task-finished">
              <label className="finish">
                <span className="label">Finished</span>
                <input type="checkbox" checked={item.finished} readOnly />
              </label>
            </div>
          </div>
        ))}
        
      
      <button className="return-button" onClick={onReturn}>
        Return
      </button>
    </div>
  );
}

export default NearlyPlace;
