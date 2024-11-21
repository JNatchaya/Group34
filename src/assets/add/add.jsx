import React, { useState } from "react";
import "./add.css";
import "../universal-style/uni-style.css";

function Add({ firstIn, SecIn, TirdIn, fortIn, setOpen }) {
  const [evidence, setEvidence] = useState(null);

  const handleAddEvidence = (event) => {
    const file = event.target.files[0];
    if (file) {
      setEvidence(URL.createObjectURL(file));
    }
  };

  return (
    <div className="add-container">
      <div className="add-sup-container">
        <h3 className="header-add">{firstIn}</h3>
        <div className="inside-add">
          <div className="field">
            <label htmlFor="title" className="label">
              {SecIn}:
            </label>
            <input type="text" id="title" className="input" />
          </div>
          <div className="field">
            <label htmlFor="property" className="label">
              {TirdIn}:
            </label>
            <input type="text" id="property" className="input" />
          </div>


          {fortIn === 'property' &&(
            <div className="field">
            <label htmlFor="brand" className="label">
              {fortIn}:
            </label>
            <div className="details-container">
    {/* Class Rating */}
    <div className="detail-item">
      <span className="detail-label">Class Rating</span>
      <input
        type="number"
        min="1"
        max="5"
        className="detail-input"
        placeholder="1-5"
      />
    </div>

    {/* Capacity */}
    <div className="detail-item">
      <span className="detail-label">Capacity</span>
      <input
        type="number"
        className="detail-input"
        placeholder="Enter capacity (e.g., 9)"
      />
    </div>

    {/* Discharge */}
    <div className="detail-item">
      <span className="detail-label">Discharge</span>
      <input
        type="number"
        className="detail-input"
        placeholder="Enter discharge time (e.g., 30)"
      />
    </div>

    {/* Operating Temperature Range */}
    <div className="detail-item">
      <span className="detail-label">Operating Temperature Range</span>
      <input
        type="text"
        className="detail-input"
        placeholder="Enter range (e.g., 5-60)"
      />
    </div>
  </div>
          </div>
          )}

          {fortIn !== "Reason" && (
            <>
              <div className="image-upload-container">
                <div className="image-box">
                  {evidence && (
                    <img
                      src={evidence}
                      alt="Preview"
                      className="image-preview"
                    />
                  )}
                </div>
                <label htmlFor="file-upload" className="upload-button">
                  Upload File
                </label>
                <input
                  type="file"
                  id="file-upload"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleAddEvidence}
                />
              </div>
 
            </>
          )}             
          <div className="button-container">
                <button
                  className="cancel-button"
                  onClick={() => {
                    setOpen("");
                  }}
                >
                  Cancel
                </button>
                <button
                  className="confirm-button"
                  onClick={() => {
                    setOpen("");
                  }}
                >
                  Confirm
                </button>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
