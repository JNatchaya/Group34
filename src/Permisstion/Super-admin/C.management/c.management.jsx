import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles
import L from "leaflet";
import { useCombinedData } from "../../../DATA/CombinedDataContext";
import "./c.management.css";
import SaDashBord from "../Sa-Dashbord/sa-dashbord";

// Fix Leaflet's marker icons not appearing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Component for capturing map clicks and setting location
function LocationSelector({ setLocation }) {
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
  const fireData = combinedData[0]?.DPCH[0]?.fire;
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [currentPage, setCurrentPage] = useState("company");
  const [showAddCompanyPopup, setShowAddCompanyPopup] = useState(false);
  const [showAddDepartmentPopup, setShowAddDepartmentPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [departmentLocation, setDepartmentLocation] = useState(null);
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    item: null,
  });
  const [editingEntity, setEditingEntity] = useState({
    type: null,
    data: null,
  }); // Track editing entity

  // Handle right-click on an account item
  const handleRightClick = (event, item, type) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.pageX,
      y: event.pageY,
      item: item,
      type: type,
    });
  };

  // Close context menu
  const handleCloseContextMenu = () => {
    setContextMenu({ visible: false, x: 0, y: 0, item: null, type: null });
  };

  // Context menu actions
  const handleDelete = () => {
    console.log("Delete", contextMenu.item);
    handleCloseContextMenu();
  };

  const handleEdit = () => {
    setEditingEntity({
      type: contextMenu.type, // "company" or "department"
      data: contextMenu.item,
    });
    setShowEditPopup(true); // Show the Edit popup
    handleCloseContextMenu();
  };

  // Popup controls
  const handleAddCompany = () => setShowAddCompanyPopup(true);
  const handleAddDepartment = () => setShowAddDepartmentPopup(true);
  const closeCompanyPopup = () => setShowAddCompanyPopup(false);
  const closeDepartmentPopup = () => {
    setShowAddDepartmentPopup(false);
    setDepartmentLocation(null);
  };
  const closeEditPopup = () => setShowEditPopup(false); // Close Edit popup

  return (
    <div className="c-management-container" onClick={handleCloseContextMenu}>
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
            Companies
          </span>
          {selectedCompany && (
            <>
              <span> / </span>
              <span
                className="BreadCrumb-child"
                onClick={() => {
                  setCurrentPage("department");
                  setSelectedDepartment(null);
                }}
              >
                {selectedCompany.CMname}
              </span>
            </>
          )}
          {selectedDepartment && (
            <>
              <span> / </span>
              <span className="BreadCrumb-child">Dashboard</span>
            </>
          )}
        </div>
      </div>

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
              onContextMenu={(e) => handleRightClick(e, company, "company")}
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
          {selectedCompany.DPCH.length > 0 ? (
            selectedCompany.DPCH.map((department, index) => (
              <div
                key={index}
                className={`account-item ${
                  selectedDepartment?.DPName === department.DPName
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  console.log("Selected Department:", department.DPName);
                  setSelectedDepartment(department);
                  setCurrentPage("FireExtinguishers");
                }}
                onContextMenu={(e) =>
                  handleRightClick(e, department, "department")
                }
              >
                <div className="company-logo"></div>
                <div className="company-name">
                  {department.DPName}
                  <span className="department-count">
                    (Fire Extinguishers {department.fire?.length || 0})
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>No departments found for {selectedCompany.CMname}</p>
          )}
        </div>
      )}

      {currentPage === "FireExtinguishers" && selectedDepartment && (
        <div className="company-container">
          <SaDashBord
            selectedDepartment={selectedDepartment}
            permiss={"SuperAdmin"}
          />
        </div>
      )}

      {/* Add buttons */}
      <button
        className="add-company-btn"
        onClick={
          currentPage === "company" ? handleAddCompany : handleAddDepartment
        }
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
              <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                className="map"
                style={{ height: "300px", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationSelector setLocation={setDepartmentLocation} />
                {departmentLocation && (
                  <Marker
                    position={[departmentLocation.lat, departmentLocation.lng]}
                  />
                )}
              </MapContainer>
              <label className="form-label">Number of Fire Extinguishers</label>
              <input
                type="number"
                className="form-input"
                placeholder="Enter number"
              />
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

      {/* Edit Popup */}
      {showEditPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <h3 className="popup-header">
              Edit {editingEntity.type === "company" ? "Company" : "Department"}{" "}
              Information
            </h3>
            <form>
              <label className="form-label">
                {editingEntity.type === "company"
                  ? "Company Name"
                  : "Department Name"}
              </label>
              <input
                type="text"
                className="form-input"
                value={
                  editingEntity.data?.CMname || editingEntity.data?.DPName || ""
                }
                onChange={(e) =>
                  setEditingEntity({
                    ...editingEntity,
                    data: {
                      ...editingEntity.data,
                      [editingEntity.type === "company" ? "CMname" : "DPName"]:
                        e.target.value,
                    },
                  })
                }
              />

              <label className="form-label">Location</label>
              <div className="map-placeholder">Choose New Location</div>

              {/* Action buttons */}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeEditPopup}
                >
                  Cancel
                </button>
                <button type="submit" className="edit-btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Context Menu */}
      {contextMenu.visible && (
        <div
          className="context-menu"
          style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
        >
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default C_management_tab;
