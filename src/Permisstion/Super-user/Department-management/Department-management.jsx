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
  const [showEditDepartmentPopup, setShowEditDepartmentPopup] = useState(false); // For editing
  const [editDepartmentName, setEditDepartmentName] = useState(""); // For edited name
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
    if (!contextMenu.item) return;
  
    // Update the firstCompany's DPCH directly
    const updatedDPCH = firstCompany.DPCH.filter(
      (department) => department !== contextMenu.item
    );
  
    // Update the firstCompany's data locally
    firstCompany.DPCH = updatedDPCH;
  
    console.log("Deleted Department:", contextMenu.item);
  
    // Optionally, re-render by updating a local state (e.g., a dummy state toggle)
    forceUpdate();
  
    handleCloseContextMenu();
  };
  
  // Force a re-render without a context or setter
  const [, setRender] = useState(0);
  const forceUpdate = () => setRender((prev) => prev + 1);
  

  const handleEdit = () => {
    setEditDepartmentName(contextMenu.item?.DPName || "");
    setShowEditDepartmentPopup(true);
    handleCloseContextMenu();
  };

  // Close edit popup
  const closeEditPopup = () => setShowEditDepartmentPopup(false);

  // Handle edit form submission
  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Department Name:", editDepartmentName);

    // Update the department name in your data here
    // For example, you could use a function to update the context or state
    const updatedCompanyData = combinedData.map((company) => {
      if (company === firstCompany) {
        return {
          ...company,
          DPCH: company.DPCH.map((department) =>
            department === contextMenu.item
              ? { ...department, DPName: editDepartmentName }
              : department
          ),
        };
      }
      return company;
    });

    console.log("Updated Data:", updatedCompanyData);
    setShowEditDepartmentPopup(false);
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
        {currentPage === "department" && (
          <div className="search-container">
            <input type="text" placeholder="Search" className="search-bar" />
          </div>
        )}
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
        <button className="add-company-btn" onClick={() => setShowAddDepartmentPopup(true)}>
          Add Department
        </button>
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
            <button className="close-popup-btn" onClick={closeEditPopup}>
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
