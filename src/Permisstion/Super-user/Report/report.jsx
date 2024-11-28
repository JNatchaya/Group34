import React, { useState } from 'react';

import cardData from '../../../assets/mail-popup/data';
import { saveCardDataToLocalStorage } from '../../../assets/mail-popup/data';
import './report.css';

function Report() {
  const [image, setImage] = useState(null);
  const [serial, setSerial] = useState('');
  const [author] = useState('client'); // Fixed spelling from 'cilent'
  const [detail, setDetail] = useState('');

  const setdata = {
    from: 'Report',
    serial,
    image,
    author,
    detail,
  };

  const handleAddImage = (event) => {
    const files = event.target.files;
    if (files && files[0]) {
      const fileUrl = URL.createObjectURL(files[0]);
      setImage(fileUrl);
      event.target.value = null; // Clear input
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleSubmit = () => {
    cardData.push(setdata)
    saveCardDataToLocalStorage()
    setDetail('')
    setSerial('')
  };

  return (
    <div className="report-container">
      <div className="container-top">
        <div className="Breadcrumb">{/* Breadcrumb navigation */}</div>
      </div>

      <div className="report-inner">
        <div className="report-title">Report Fire Extinguisher</div>

        <div className="report-serial-number">
          <div className="serial-number-wrapper">
            <label className="serial-label">Serial Number:</label>
            <input
              className="serial-input"
              type="text"
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
            />
          </div>
        </div>

        <div className="report-detail">
          <div className="report-detail-wrapper">
            <label className="detail-label">Report Detail:</label>
            <input
              className="detail-input-sup"
              type="text"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </div>
        </div>

        <div className="report-image-sup">
          <div className="add-image">
            {image ? (
              <div className="image-wrapper">
                <img src={image} alt="Selected" className="uploaded-image" />
                <button className="remove-image-btn" onClick={handleRemoveImage}>
                  Remove
                </button>
              </div>
            ) : (
              <p>No image selected</p>
            )}
          </div>
          <label className="upload-btn">
            <input
              type="file"
              accept="image/*"
              className="upload-input"
              onChange={handleAddImage}
              style={{ display: 'none' }}
            />
            <div className="upload-icon bi bi-cloud-upload"></div>
            <div className="upload-text">Upload file</div>
          </label>
        </div>

        <div className="report-submit">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Report;



