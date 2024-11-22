import React, { useState } from "react";
import "../Assignment/assignment_info.css";

function AssignmentInfo({ onReturn }) {
  const [evidence, setEvidence] = useState([]);
  const [checkedItems, setCheckedItems] = useState(Array(6).fill(false));
  const [showPopup, setShowPopup] = useState(false);

  const handleAddEvidence = (event) => {
    const files = Array.from(event.target.files);
    const newEvidence = files.map((file) => URL.createObjectURL(file));
    setEvidence((prevEvidence) => [...prevEvidence, ...newEvidence]);
  };

  const handleDeleteEvidence = (indexToDelete) => {
    setEvidence((prevEvidence) =>
      prevEvidence.filter((_, index) => index !== indexToDelete)
    );
  };

  const toggleChecked = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleSubmit = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      onReturn(); // กลับ
    }, 3000);
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
      <div className="info-header">
        <h3>Assignment Info</h3>
      </div>
      <div className="info-main-content">
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
              <div className="M-report-image">Reported image</div>
            </div>
            <div className="i-location">
              <div className="M-Location">
                <h4>Location</h4>
              </div>
              <div className="M-location-details">Map</div>
            </div>
          </div>
        </div>
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
                <div key={index} className="evidence-item">
                  <img src={src} alt="evidence" className="evidence-image" />
                  <i
                    className="bi bi-x-circle-fill delete-image-icon"
                    onClick={() => handleDeleteEvidence(index)}
                  ></i>
                </div>
              ))}

              <label className="add-button">
                <h5>Add</h5>
                <input
                  type="file"
                  onChange={handleAddEvidence}
                  multiple
                  hidden
                />
              </label>
            </div>
          </div>
        </div>
        <div className="info-footer">
          <button className="return-button2" onClick={onReturn}>
            Return
          </button>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Submitted successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AssignmentInfo;
