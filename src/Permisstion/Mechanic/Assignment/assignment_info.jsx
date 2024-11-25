import React, { useState } from "react";
import "../Assignment/assignment_info.css";

function AssignmentInfo({ onReturn }) {
  const [evidence, setEvidence] = useState([]);
  const [checkedItems, setCheckedItems] = useState(Array(6).fill(false));
  const [showPopup, setShowPopup] = useState(false);
  const [dropdowns, setDropdowns] = useState(Array(6).fill(false)); 

  const handleAddEvidence = (event) => {
    const files = Array.from(event.target.files);
    const newEvidence = files.map((file) => URL.createObjectURL(file));
    setEvidence((prevEvidence) => [...newEvidence, ...prevEvidence]);
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

  const toggleDropdown = (index) => {
    const newDropdowns = [...dropdowns];
    newDropdowns[index] = !newDropdowns[index]; 
    setDropdowns(newDropdowns);
  };

  const handleSubmit = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      onReturn();
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
              <div className="M-location-details">
                <span>
                  <i class="bi bi-pin-map-fill"></i> &nbsp;Map
                </span>
              </div>
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
                  <div className="checklist-header">
                    <span>{item}</span>
                    <div className="mChecklist-line">
                      <i
                        className={`bi ${
                          dropdowns[index]
                            ? "bi-caret-up-fill"
                            : "bi-caret-down-fill"
                        }`}
                        onClick={() => toggleDropdown(index)}
                      ></i>
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
                  </div>
                  {dropdowns[index] && (
                    <div className="dropdown-box">
                      <p>Additional details for {item}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="info-section-item">
            <div className="Evidence">
              <h4>Evidence</h4>
            </div>
            <div className="evidence-preview">
              <div className="evidence-container">
                {evidence.map((src, index) => (
                  <div key={index} className="evidence-item">
                    <img src={src} alt="evidence" className="evidence-image" />
                    <i
                      className="bi bi-x-circle-fill delete-image-icon"
                      onClick={() => handleDeleteEvidence(index)}
                    ></i>
                  </div>
                ))}
              </div>

              <label className="mAdd-button">
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
