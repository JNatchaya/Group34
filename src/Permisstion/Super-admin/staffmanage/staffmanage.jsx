import React, { useState } from "react";
import "./staffmanage.css";
import { fetchStaffData } from "../../../DATA/staffData"; // Import your staff data module

function C_management_tab() {
  const staffData = fetchStaffData(); // Fetch staff data
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [currentPage, setCurrentPage] = useState("staff");

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
              setSelectedStaff(null);
            }}
          >
            Staff /
          </span>
          {currentPage === "details" && selectedStaff && (
            <span className="BreadCrumb-child">
              {selectedStaff.Name} /
            </span>
          )}
        </div>
      </div>

      {/* Staff Section */}
      {currentPage === "staff" && (
        
        <div className="staff-container">
          {staffData.map((staff, index) => (
            <div
              key={index}
              className={`account-item ${
                selectedStaff?.StaffID === staff.StaffID ? "active" : ""
              }`}
              onClick={() => {
                setSelectedStaff(staff);
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
      )} */}
    </div>
  );
}

export default C_management_tab;
