import React, { useState, useEffect } from "react";
import "./staffmanage.css";
import "./userprofile.css";
import { fetchStaffData, fetchStaffByID } from "../../../DATA/staffData";

function StaffManagement_tab() {
  const staffData = fetchStaffData(); // Fetch staff data
  const [selectedStaffID, setSelectedStaffID] = useState(null);
  const [currentPage, setCurrentPage] = useState("staff");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (selectedStaffID) {
      const data = fetchStaffByID(selectedStaffID);
      setUserData(data);
    }
  }, [selectedStaffID]);

  return (
    <div className="c-management-container">
      {/* Breadcrumb */}
      <div className="container-top">
        <div className="Breadcrumb">
          <span className="bi bi-folder-fill"></span>
          <span
            className="BreadCrumb-child"
            onClick={() => {
              setCurrentPage("staff");
              setSelectedStaffID(null);
            }}
          >
            Staff /
          </span>
          {currentPage === "details" && userData && (
            <span className="BreadCrumb-child">{userData.Name} /</span>
          )}
        </div>
      </div>

      {/* Staff List Section */}
      {currentPage === "staff" && (
        <div className="staff-container">
          {staffData.map((staff, index) => (
            <div
              key={index}
              className={`account-item ${
                selectedStaffID === staff.StaffID ? "active" : ""
              }`}
              onClick={() => {
                setSelectedStaffID(staff.StaffID);
                setCurrentPage("details");
              }}
            >
              <div className="company-logo"></div>
              <div className="company-name">
                {staff.Name}
                <span className="department-count">Role: {staff.Role}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Staff Details Section
      {currentPage === "details" && selectedStaff && (
        <div className="staff-details-container">
          <h2>{selectedStaff.Name}</h2>
          <p><strong>Role:</strong> {selectedStaff.Role}</p>
          <p><strong>Behavior Score:</strong> {selectedStaff.BehaviorScore}</p>
          <h3>Assignment Footprint:</h3>
          <ul>
            {selectedStaff.AssignmentFootprint.map((assignment, index) => (
              <li key={index}>
                <p><strong>Task:</strong> {assignment.Task}</p>
                <p><strong>Date:</strong> {assignment.Date}</p>
                <p><strong>Status:</strong> {assignment.Status}</p>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setCurrentPage("staff");
              setSelectedStaff(null);
            }}
          >
            Back to Staff
          </button>
        </div>
      )}
    </div>
  );
}

export default StaffManagement_tab;
