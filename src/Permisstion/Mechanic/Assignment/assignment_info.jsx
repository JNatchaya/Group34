import React, { useState } from "react";
import "../Assignment/assignment_info.css";

function AssignmentInfo({ onReturn }) {
  const [evidence, setEvidence] = useState([]);
  const [checkedItems, setCheckedItems] = useState(Array(6).fill(false)); 

  const handleAddEvidence = (event) => {
    const file = event.target.files[0];
    if (file) {
      setEvidence([...evidence, URL.createObjectURL(file)]);
    }
  };

  const toggleChecked = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const checklistData = [
    "Pressure Gauge",
    "Pull Pin and Temper Seal",
    "Handle",
    "Horse",
    "Fire Extinguisher Body",
    "Fire Extinguisher Expire",
  ];

  return (
    <div className="info-container">
      {/* Header Section */}
      <div className="info-header">
        <h3>Assignment Info</h3>
      </div>
      {/* Main Content Section */}
      <div className="info-main-content">
        {/* top Section with Nested Grid */}
        <div className="info-section-top">
          <div className="info-section-item">
            <div className="place">
              <h4>Place</h4>
            </div>
            <div className="place-image">Reported image</div>
          </div>
          <div className="info-report-location">
            <div className="i-report">
              <div className="info-report">
                <h4>Report Details</h4>
              </div>
              <div className="report-image">Reported image</div>
            </div>
            <div className="i-location">
              <div className="Location">
                <h4>Location</h4>
              </div>
              <div className="location-details">Map</div>
            </div>
          </div>
        </div>
        {/* Bottom Section with Nested Grid */}
        <div className="info-section-bottom">
          <div className="info-section-item">
            <div className="check-list">
              <h4>Check list</h4>
            </div>
            <div className="Checklist-details">
              {checklistData.map((item, index) => (
                <div key={index} className="checklist-item">
                  <span>{item}</span>
                  <button
                    className="checklist-icon"
                    onClick={() => toggleChecked(index)}
                  >
                    {checkedItems[index] ? (
                      <i className="bi bi-check-circle-fill"></i>
                    ) : (
                      <i className="bi bi-circle"></i>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="info-section-item">
            <div className="Evidence">
              <h4>Evidence</h4>
            </div>
            <div className="evidence-preview">
              {evidence.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="evidence"
                  className="evidence-image"
                />
              ))}

              <label className="add-button">
                <h5>Add</h5>
                <input type="file" onChange={handleAddEvidence} hidden />
              </label>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="info-footer">
          <div className="info-footer-item"></div>
          <div className="info-footer-item">
            <button
              className="return-button2"
              onClick={() => onReturn("MechanicPages")}
            >
              Return
            </button>
          </div>
          <div className="info-footer-item">
            <button
              className="submit-button"
              onClick={() => onReturn("MechanicPages")}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentInfo;
