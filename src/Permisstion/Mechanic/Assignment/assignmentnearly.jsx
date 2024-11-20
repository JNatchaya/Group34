import React, { useState } from "react";
import NearlyPlace from "../Nearly-place/nearly_place";
import "../layout/M-layout.css";

function AssignmentNearly({ setIsInNearlyPlace }) { 
  const [showNearlyPlace, setShowNearlyPlace] = useState(false);

  const handleTaskClick = () => {
    setShowNearlyPlace(true);
    setIsInNearlyPlace(true); // 
  };

  const handleReturn = () => {
    setShowNearlyPlace(false);
    setIsInNearlyPlace(false);
  };

  return (
    <div>
      {showNearlyPlace ? (
        <NearlyPlace onReturn={handleReturn} />
      ) : (
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
      )}
    </div>
  );
}

export default AssignmentNearly;