import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles
import L from "leaflet";
import { useCombinedData } from "../../../DATA/CombinedDataContext";
import SaDashBord from "../../Super-admin/Sa-Dashbord/sa-dashbord";
function DepartmentMangement() {
    const combinedData = useCombinedData();
  const firstCompany = combinedData[0]; // Get the first company
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [currentPage, setCurrentPage] = useState("department");
  const [showAddDepartmentPopup, setShowAddDepartmentPopup] = useState(false);
  const [departmentLocation, setDepartmentLocation] = useState(null);
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    item: null,
  });

  // Handle right-click on an account item
  const handleRightClick = (event, item) => {
    event.preventDefault(); // Prevent the default browser context menu
    setContextMenu({
      visible: true,
      x: event.pageX - 240,
      y: event.pageY - 120,
      item: item,
    });
  };

  // Close context menu
  const handleCloseContextMenu = () => {
    setContextMenu({ visible: false, x: 0, y: 0, item: null });
  };

  // Context menu actions
  const handleDelete = () => {
    console.log("Delete", contextMenu.item);
    handleCloseContextMenu();
  };

  const handleEdit = () => {
    console.log("Edit", contextMenu.item);
    handleCloseContextMenu();
  };

  // Popup controls
  const handleAddDepartment = () => setShowAddDepartmentPopup(true);
  const closeDepartmentPopup = () => {
    setShowAddDepartmentPopup(false);
    setDepartmentLocation(null);
  };

  return (
    <div className="c-management-container" onClick={handleCloseContextMenu}>
      {/* Breadcrumb */}
      <div className="container-top">
        <div className="Breadcrumb">
          <span className="bi bi-folder-fill"></span>
          <span
            className="BreadCrumb-child"
            onClick={() => {
              setCurrentPage("department");
              setSelectedDepartment(null);
            }}
          >
            Departments
          </span>
          {selectedDepartment && (
            <>
              <span> / </span>
              <span className="BreadCrumb-child">Dashboard</span>
            </>
          )}
        </div>
      </div>

      {currentPage === "department" && firstCompany && (
        <div className="company-container">
          {firstCompany.DPCH.map((department, index) => (
            <div
              key={index}
              className={`account-item ${
                selectedDepartment?.DPName === department.DPName ? "active" : ""
              }`}
              onClick={() => {
                console.log("Selected Department:", department.DPName);
                setSelectedDepartment(department);
                setCurrentPage("FireExtinguishers");
              }}
              onContextMenu={(e) => handleRightClick(e, department)}
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

      {currentPage === "FireExtinguishers" && selectedDepartment && (
        <div className="company-container">
          <SaDashBord
            selectedDepartment={selectedDepartment}
            permiss={"SuperAdmin"}
          />
        </div>
      )}

      {/* Add Department Button */}
      {currentPage !== "FireExtinguishers" && (
        <button className="add-company-btn" onClick={handleAddDepartment}>
          Add Department
        </button>
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

      {/* Context Menu */}
      {contextMenu.visible && (
        <div
          className="context-menu"
          style={{
            position: "absolute",
            top: `${contextMenu.y}px`,
            left: `${contextMenu.x}px`,
            zIndex: 1000,
            backgroundColor: "#fff",
            border: "1px solid #ddd",

            borderRadius: "5px",
          }}
        >
          <button
            style={{ display: "block", marginBottom: "5px" }}
            onClick={handleEdit}
          >
            Edit
          </button>
          <button style={{ display: "block" }} onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default DepartmentMangement;