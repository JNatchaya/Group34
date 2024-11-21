import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles
import L from "leaflet";
import { useCombinedData } from "../../../DATA/CombinedDataContext";
import "./c.management.css";

// Fix Leaflet's marker icons not appearing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function LocationSelector({ setLocation }) {
  // Map event to capture clicks and set location
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setLocation({ lat, lng });
    },
  });

  return null;
}

function C_management_tab() {
  const combinedData = useCombinedData();
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [currentPage, setCurrentPage] = useState("company");
  const [showAddCompanyPopup, setShowAddCompanyPopup] = useState(false);
  const [showAddDepartmentPopup, setShowAddDepartmentPopup] = useState(false);
  const [departmentLocation, setDepartmentLocation] = useState(null); // Store location

  const handleAddCompany = () => {
    setShowAddCompanyPopup(true);
  };

  const handleAddDepartment = () => {
    setShowAddDepartmentPopup(true);
  };

  const closeCompanyPopup = () => {
    setShowAddCompanyPopup(false);
  };

  const closeDepartmentPopup = () => {
    setShowAddDepartmentPopup(false);
    setDepartmentLocation(null); // Reset location when closing
  };

  return (
    <div className="c-management-container">
      {/* Breadcrumb */}
      <div className="container-top">
        <div className="Breadcrumb">
          <span className="bi bi-folder-fill"></span>
          <span
            className="BreadCrumb-child"
            onClick={() => {
              setCurrentPage("company");
              setSelectedCompany(null);
              setSelectedDepartment(null);
            }}
          >
            Companies /
          </span>
          {currentPage === "department" && selectedCompany && (
            <span
              className="BreadCrumb-child"
              onClick={() => {
                setCurrentPage("department");
                setSelectedDepartment(null);
              }}
            >
              {selectedCompany.CMname} /
            </span>
          )}
        </div>
      </div>

      {/* Company and Department Sections */}
      {currentPage === "company" && (
        <div className="company-container">
          {combinedData.map((company, index) => (
            <div
              key={index}
              className={`account-item ${
                selectedCompany?.CMname === company.CMname ? "active" : ""
              }`}
              onClick={() => {
                setSelectedCompany(company);
                setSelectedDepartment(null);
                setCurrentPage("department");
              }}
            >
              <div className="company-logo"></div>
              <div className="company-name">
                {company.CMname}
                <span className="department-count">
                  Departments ({company.DPCH.length})
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {currentPage === "department" && selectedCompany && (
        <div className="company-container">
          {selectedCompany.DPCH.map((department, index) => (
            <div
              key={index}
              className={`account-item ${
                selectedDepartment?.DPName === department.DPName ? "active" : ""
              }`}
              onClick={() => setSelectedDepartment(department)}
            >
              <div className="company-logo"></div>
              <div className="company-name">
                {department.DPName}
                <span className="department-count">
                  (Fire Extinguishers {department.fire?.length || 0})
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Buttons */}
      <button
        className="add-company-btn"
        onClick={() => {
          if (currentPage === "company") {
            handleAddCompany();
          } else if (currentPage === "department") {
            handleAddDepartment();
          }
        }}
      >
        {currentPage === "company" ? "Add Company" : "Add Department"}
      </button>

      {/* Add Company Popup */}
      {showAddCompanyPopup && (
        <div className="popup-overlay">
          <div className="popup-container styled-popup">
            <h3 className="popup-header">Add Company</h3>
            <form>
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-input large-input"
                placeholder="Enter company name"
              />

              <label className="form-label">Date of subscription</label>
              <input type="date" className="form-input" />

              <button type="submit" className="form-submit-btn">
                Confirm
              </button>
            </form>
            <button className="close-popup-btn" onClick={closeCompanyPopup}>
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Add Department Popup */}
      {showAddDepartmentPopup && (
        <div className="popup-overlay">
          <div className="popup-container styled-popup">
            <h3 className="popup-header">Add Department</h3>
            <form>
              <label className="form-label">Department Name</label>
              <input
                type="text"
                className="form-input large-input"
                placeholder="Enter department name"
              />

              <label className="form-label">Location</label>
              {/* <div className="map-container"> */}
                <MapContainer
                  center={[51.505, -0.09]} // Default map center
                  zoom={13}
                  className="map"
                  style={{ height: "300px", width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="© OpenStreetMap contributors"
                  />
                  <LocationSelector setLocation={setDepartmentLocation} />
                  {departmentLocation && (
                    <Marker position={[departmentLocation.lat, departmentLocation.lng]} />
                  )}
                </MapContainer>
              {/* </div> */}

              <label className="form-label">Number of Fire Extinguishers</label>
              <input type="number" className="form-input" placeholder="Enter number" />

              <button type="submit" className="form-submit-btn">
                Confirm
              </button>
            </form>
            <button className="close-popup-btn" onClick={closeDepartmentPopup}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default C_management_tab;
