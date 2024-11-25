import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles
import L from "leaflet";
import { useCombinedData } from "../../../DATA/CombinedDataContext";
import SaDashBord from "../../Super-admin/Sa-Dashbord/sa-dashbord";

function DepartmentManagement() {
  const combinedData = useCombinedData();
  const firstCompany = combinedData[0];
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [currentPage, setCurrentPage] = useState("department");
  const [showEditDepartmentPopup, setShowEditDepartmentPopup] = useState(false);
  const [editDepartmentName, setEditDepartmentName] = useState("");
  const [contextMenu, setContextMenu] = useState(null);

  // Handle Edit Submission
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editDepartmentName.trim()) {
      alert("Please provide a valid department name.");
      return;
    }

    // Update the selected department's name
    const updatedDPCH = firstCompany.DPCH.map((department) =>
      department.DPName === selectedDepartment?.DPName
        ? { ...department, DPName: editDepartmentName }
        : department
    );

    firstCompany.DPCH = updatedDPCH;
    console.log("Updated Department:", firstCompany);

    setShowEditDepartmentPopup(false);
    setSelectedDepartment(null);
  };

  // Handle Delete Department
  const handleDeleteDepartment = () => {
    if (window.confirm(`Are you sure you want to delete ${selectedDepartment?.DPName}?`)) {
      firstCompany.DPCH = firstCompany.DPCH.filter(
        (department) => department.DPName !== selectedDepartment?.DPName
      );
      console.log("Deleted Department:", selectedDepartment?.DPName);
      setSelectedDepartment(null);
    }
    setContextMenu(null);
  };

  // Open Edit Popup
  const handleEditDepartment = (department) => {
    setEditDepartmentName(department.DPName);
    setSelectedDepartment(department);
    setShowEditDepartmentPopup(true);
    setContextMenu(null);
  };

  // Context Menu Handler
  const handleRightClick = (e, department) => {
    e.preventDefault();
    setContextMenu({
      department,
      x: e.pageX - 240,
      y: e.pageY - 120,
    });
    setSelectedDepartment(department);
  };

  // Close Context Menu
  const closeContextMenu = () => setContextMenu(null);

  return (
    <div
      className="c-management-container"
      onClick={closeContextMenu} // Close context menu on outside click
    >
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

{/* Department List */}
{currentPage === "department" && firstCompany && (
  <div className="company-container">
    {firstCompany.DPCH.map((department, index) => (
      <div
        key={index}
        className={`account-item ${
          selectedDepartment?.DPName === department.DPName ? "active" : ""
        }`}
        onClick={() => {
          setSelectedDepartment(department); // Set the selected department
          setCurrentPage("FireExtinguishers"); // Navigate to dashboard
        }}
        onContextMenu={(e) => handleRightClick(e, department)} // Trigger context menu
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


      {/* Fire Extinguishers Dashboard */}
      {currentPage === "FireExtinguishers" && selectedDepartment && (
        <div className="company-container">
          <SaDashBord
            selectedDepartment={selectedDepartment}
            permiss={"SuperAdmin"}
          />
        </div>
      )}

      {/* Context Menu */}
      {contextMenu && (
        <div
          className="context-menu"
          style={{
            position: "absolute",
            top: contextMenu.y,
            left: contextMenu.x,
            background: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
        >
          <div
            className="context-menu-item"
            onClick={() => handleEditDepartment(contextMenu.department)}
          >
            Edit
          </div>
          <div
            className="context-menu-item"
            onClick={handleDeleteDepartment}
          >
            Delete
          </div>
        </div>
      )}

      {/* Edit Department Popup */}
      {showEditDepartmentPopup && (
        <div className="popup-overlay">
          <div className="popup-container styled-popup">
            <h3 className="popup-header">Edit Department</h3>
            <form onSubmit={handleEditSubmit}>
              <label className="form-label">Department Name</label>
              <input
                type="text"
                className="form-input large-input"
                value={editDepartmentName}
                onChange={(e) => setEditDepartmentName(e.target.value)}
              />
              <button type="submit" className="form-submit-btn">
                Save Changes
              </button>
            </form>
            <button
              className="close-popup-btn"
              onClick={() => setShowEditDepartmentPopup(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DepartmentManagement;