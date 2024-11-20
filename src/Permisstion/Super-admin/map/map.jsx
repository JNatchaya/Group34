import React from "react";
import "./map.css";

function MapContainer() {
  return (
    <div className="map-container">

        
      <div className="map-section">

      </div>

      <div className="summary-section">
        <h1 className="summary-title">SUMMARY</h1>
        <div className="summary-stats">
          <div className="stat-box">
            <p className="stat-unit" style={{fontWeight:'bold'}}>Client</p>
            <p className="stat-value">10</p>
            <p className="stat-unit">UNIT</p>
          </div>
          <div className="stat-box">
          <p className="stat-unit" style={{fontWeight:'bold'}}>Department</p>
            <p className="stat-value">250</p>
            <p className="stat-unit">UNIT</p>
          </div>
          <div className="stat-box">
          <p className="stat-unit" style={{fontWeight:'bold'}}>fire extinguisher installed</p>
            <p className="stat-value">30K</p>
            <p className="stat-unit">UNIT</p>
          </div>
        </div>
        <div className="summary-table">
          <div className="table-header">
            <div className="header-cell">Client</div>
            <div className="header-cell">Department</div>
            <div className="header-cell">Tank Installed</div>
            <div className="header-cell">Percentage</div>
          </div>
          <div className="table-body">
            {[...Array(15)].map((_, index) => (
              <div className="table-row" key={index}>
                <div className="cell">Something company</div>
                <div className="cell">Some Where Department</div>
                <div className="cell">365</div>
                <div className="cell">
                  <div className="percentage-bar">
                    <span className="green-bar"></span>
                    <span className="yellow-bar"></span>
                    <span className="red-bar"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapContainer;
