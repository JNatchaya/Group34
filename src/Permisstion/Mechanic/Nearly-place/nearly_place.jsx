import React from "react";
import '../layout/M-layout.css';

function NearlyPlace({ onReturn }) {
  return (
    <div className="nearly-place">
      <h2>Assignment Nearly</h2>
      <div className="place-section">
        <h3>Place</h3>
        {[...Array(5)].map((_, index) => (
          <div key={index} className="task-card2">
            <span className="task-title">fire extinguisher Serial number</span>
            <label className="finish">
              <span className="label">finish</span>
              <input type="checkbox" />
            </label>
          </div>
        ))}
      </div>
      <button className="return-button" onClick={onReturn}>
        return
      </button>
    </div>
  );
}

export default NearlyPlace;
