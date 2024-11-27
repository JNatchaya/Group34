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
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedSerialNumber, setSelectedSerialNumber] = useState('');
  const [currentPage, setCurrentPage] = useState("company");
  const [editingEntity, setEditingEntity] = useState(null);
  const [showAddCompanyPopup, setShowAddCompanyPopup] = useState(false);
  const [showAddDepartmentPopup, setShowAddDepartmentPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [departmentLocation, setDepartmentLocation] = useState(null);
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    item: null,
    type: null,
  });
  const handleCloseContextMenu = () => {
    setContextMenu({ visible: false, x: 0, y: 0, item: null, type: null });
  };
  const handleEdit = (type, item) => {
    setEditingEntity({ type, item });
    handleCloseContextMenu();
  };

  // Close the edit popup
  const closeEditPopup = () => {
    setEditingEntity(null);
  };

  // Save edits

  const handleDelete = () => {
    if (contextMenu.type === "company") {
      // Deleting a company
      const updatedCompanies = combinedData.filter(
        (company) => company.CMname !== contextMenu.item.CMname
      );
      combinedData.splice(0, combinedData.length, ...updatedCompanies); // Update context directly
      console.log("Deleted company:", contextMenu.item.CMname);
    } else if (contextMenu.type === "department") {
      // Deleting a department
      const updatedCompanies = combinedData.map((company) => {
        if (company.CMname === selectedCompany?.CMname) {
          return {
            ...company,
            DPCH: company.DPCH.filter(
              (department) => department.DPName !== contextMenu.item.DPName
            ),
          };
        }
        return company;
      });
  
      combinedData.splice(0, combinedData.length, ...updatedCompanies); // Update context directly
  
      // Update state to force re-render
      setSelectedCompany((prev) => {
        return {
          ...prev,
          DPCH: prev.DPCH.filter(
            (department) => department.DPName !== contextMenu.item.DPName
          ),
        };
      });
  
      console.log("Deleted department:", contextMenu.item.DPName);
    }
  
    handleCloseContextMenu();
    setSelectedDepartment(null); // Reset selection after deletion
  };
  
  const saveEdit = (newName) => {
    if (editingEntity.type === "company") {
      editingEntity.item.CMname = newName;
    } else if (editingEntity.type === "department") {
      editingEntity.item.DPName = newName;
    }
    setEditingEntity(null);
  };
  // Right-click handler
  const handleRightClick = (e, type, item) => {
    e.preventDefault(); // Prevent browser's default context menu
    setContextMenu({
      visible: true,
      x: e.pageX - 240,
      y: e.pageY - 120,
      item,
      type,
    });
  };

  // Popup controls
  const handleAddCompany = () => setShowAddCompanyPopup(true);
  const handleAddDepartment = () => setShowAddDepartmentPopup(true);
  const closeCompanyPopup = () => setShowAddCompanyPopup(false);
  const closeDepartmentPopup = () => {
    setShowAddDepartmentPopup(false);
    setDepartmentLocation(null);
  };

  return (
    <div
      className="c-management-container"
      onClick={handleCloseContextMenu}
      onContextMenu={(e) => e.preventDefault()}
    >
      {contextMenu.visible && (
        <div
          className="custom-context-menu"
          style={{
            top: `${contextMenu.y}px`,
            left: `${contextMenu.x}px`,
          }}
        >
          <button
            onClick={() => handleEdit(contextMenu.type, contextMenu.item)}
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(contextMenu.type, contextMenu.item)}
          >
            Delete
          </button>
        </div>
      )}
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
              <span className="BreadCrumb-child"
              onClick={() => {
                setSelectedSerialNumber('')
              }}
              >Dashboard</span>
            </>
          )}
          {selectedSerialNumber && (
            <>
              <span> / </span>
              <span className="BreadCrumb-child"
              onClick={() => {
                setSelectedSerialNumber('')
              }}
              >{selectedSerialNumber}</span>
            </>
          )}
          {currentPage !== "FireExtinguishers" && (
            <div className="search-container">
              <input type="text" placeholder="Search" className="search-bar" />
            </div>
          )}
        </div>
      </div>

      {/* Conditionally render the search bar */}

      {currentPage === "company" && (
        <div className="company-container">
          {combinedData.map((company, index) => (
            <div
              key={index}
              className="account-item"
              onClick={() => {
                setSelectedCompany(company);
                setCurrentPage("department");
              }}
              onContextMenu={(e) => handleRightClick(e, "company", company)}
            ><div className="company-logo"></div>
              <div className="company-name">{company.CMname}</div>
              <span className="department-count">
                Departments ({company.DPCH.length})
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Department List */}
      {currentPage === "department" && selectedCompany && (
        <div className="company-container">
          {selectedCompany.DPCH.map((department, index) => (
            <div
              key={index}
              className="account-item"
              onClick={() => {
                setSelectedDepartment(department);
                setCurrentPage("FireExtinguishers");
              }}
              onContextMenu={(e) =>
                handleRightClick(e, "department", department)
              }
            ><div className="company-logo"></div>
              <div className="company-name">{department.DPName}</div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Popup */}
      {editingEntity && (
        <div className="popup-overlay">
          <div className="popup-container styled-popup">
            <h3 className="popup-header">
              Edit {editingEntity.type === "company" ? "Company" : "Department"}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newName = e.target.elements.newName.value;
                saveEdit(newName);
              }}
            >
              <label className="form-label">
                {editingEntity.type === "company"
                  ? "Company Name"
                  : "Department Name"}
              </label>
              <input
                type="text"
                name="newName"
                defaultValue={
                  editingEntity.type === "company"
                    ? editingEntity.item.CMname
                    : editingEntity.item.DPName
                }
                className="form-input large-input"
              />
              <button type="submit" className="form-submit-btn">
                Save
              </button>
            </form>
            <button
              className="close-popup-btn"
              onClick={() => setEditingEntity(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {currentPage === "FireExtinguishers" && selectedDepartment && (
        <div className="company-container">
          <SaDashBord
            selectedDepartment={selectedDepartment}
            permiss={"SuperAdmin"}
            selectedSerialNumber={selectedSerialNumber} setSelectedSerialNumber={setSelectedSerialNumber}
          />
        </div>
      )}

      {/* Add buttons */}
      {currentPage !== "FireExtinguishers" && (
        <button
          className="add-company-btn"
          onClick={
            currentPage === "company" ? handleAddCompany : handleAddDepartment
          }
        >
          {currentPage === "company" ? "Add Company" : "Add Department"}
        </button>
      )}

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

              <label className="form-label"></label>
              <div className="custom-dropdown">
                Membership Registration Format
                <select className="custom-dropdown-select">
                  <option value="basic">1 Year</option>
                  <option value="premium">2 Year</option>
                  <option value="enterprise">3 Year</option>
                </select>
              </div>

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
    </div>
  );
}

export default C_management_tab;
