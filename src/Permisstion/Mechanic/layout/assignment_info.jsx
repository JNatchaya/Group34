import React, { useState } from "react";
import "./assignment_info.css";

function AssignmentInfo({ onReturn }) {
  const [evidence, setEvidence] = useState([]);

  const handleAddEvidence = (event) => {
    const file = event.target.files[0];
    if (file) {
      setEvidence([...evidence, URL.createObjectURL(file)]);
    }
  };

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
              <h4>Place</h4>{" "}
            </div>
            <div className="place-image">Reported image</div>
          </div>
          <div className="info-section-item">
            <div className="info-report">
              <h4>Report Details</h4>
            </div>
            <div className="report-image">Reported image</div>
          </div>
        </div>
        {/* Bottom Section with Nested Grid */}
        <div className="info-section-bottom">
          <div className="info-section-item">
            <div className="check-list">
              <h4>Check list</h4>{" "}
            </div>
            <div className="Checklist-details">{/* เว้นไว้ใส่ดีเทล  */}</div>
          </div>
          <div className="info-section-item2">
            <div className="info-section-item">
              <div className="Location">
                <h4>Location</h4>
              </div>
              <div className="location-details">Map</div>
            </div>
            <div className="info-section-item">
              <div className="Evidence">
                <h4>Evidence</h4></div>
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
        </div>

        {/* Footer Section */}
        <div className="info-footer">
          <div className="info-footer-item"></div>
          <div className="info-footer-item">
            <button
             className="return-button2"
             onClick={() => onReturn("Mehanic_pages")}
           >
            Return
           </button></div>
          <div className="info-footer-item">
          <button
             className="submit-button"
             onClick={() => onReturn("Mehanic_pages")}
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
