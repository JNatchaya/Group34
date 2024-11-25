import React, { useState } from "react";
import "./G-report.css";

function GReport({ handlePageChange }) {
  const serialNumber = "SN456790"; 
  const [previewImages, setPreviewImages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const imageUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setPreviewImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  const handleDeleteImage = (indexToDelete) => {
    setPreviewImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToDelete)
    );
  };

  const handleSubmit = () => {
    const reportData = {
      serialNumber,
      reportDetail: document.querySelector(".report-textarea").value,
    };

    console.log("Submitted data:", reportData);
    setShowPopup(true);


    setTimeout(() => {
      setShowPopup(false);
      handlePageChange("dashboard");
    }, 3000);
  };

  return (
    <div className="g-report-container">
      <div className="g-report-header">
        <div className="g-logo-report"></div>
        <h1>Report Fire Extinguisher</h1>
      </div>
      <div className="report-body">
        <div className="report-field">
          <label>
            <h2>
              Serial Number: <span className="auto-filled">{serialNumber}</span>
            </h2>
          </label>
        </div>
        <div className="report-field">
          <h2>
            <label>Report Detail:</label>
          </h2>
          <textarea
            className="report-textarea"
            placeholder="Enter details here"
          ></textarea>
        </div>
        <div className="report-field">
          <label>Add Images:</label>
          <input
            type="file"
            className="upload-file"
            onChange={handleFileUpload}
            multiple
          />
          <div
            className={`image-preview-container ${
              previewImages.length > 0 ? "visible" : ""
            }`}
          >
            {previewImages.map((image, index) => (
              <div key={index} className="image-preview">
                <img src={image} alt={`Preview ${index + 1}`} />
                <i
                  className="bi bi-x-circle-fill delete-image-icon"
                  onClick={() => handleDeleteImage(index)}
                ></i>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="report-button">
        <button className="submit-button" onClick={handleSubmit}>
          REPORT!!
        </button>
      </div>

      {/* ป๊อปอัพ */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Report submitted successfully!</p>
            <button onClick={() => setShowPopup(false)} className="popup-close">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GReport;