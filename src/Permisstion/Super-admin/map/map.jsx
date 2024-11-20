import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate hook
import MapComponent from "../../../assets/leaflet/leaflet";
import "./map.css";

function MapContainer({ setSatab }) {
  const navigate = useNavigate();  

  const handleBackClick = () => {
    setSatab("C_management");  
    navigate("/C_management"); 
  };

  return (
    <div className="map-container">
      <div className="Back-Button" onClick={handleBackClick}>
        return
      </div>
      <div className="map-section">
        <MapComponent />
      </div>

      <div className="summary-section">
        <h1 className="summary-title">SUMMARY</h1>
        <div className="summary-stats">
          <div className="stat-box">
            <p className="stat-unit" style={{ fontWeight: "bold" }}>Client</p>
            <p className="stat-value">10</p>
            <p className="stat-unit">UNIT</p>
          </div>
          <div className="stat-box">
            <p className="stat-unit" style={{ fontWeight: "bold" }}>Department</p>
            <p className="stat-value">250</p>
            <p className="stat-unit">UNIT</p>
          </div>
          <div className="stat-box">
            <p className="stat-unit" style={{ fontWeight: "bold" }}>Fire extinguisher installed</p>
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
