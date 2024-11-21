import React, { useState } from "react";
import { fetchStaffData } from "../../../DATA/staffData"; // Import your staff data module
import "./user.css";

function User() {
  const staffData = fetchStaffData(); // Fetch staff data
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [currentPage, setCurrentPage] = useState("staff");

  // Filter staff to show only those with the "Mechanic" role
  const mechanicStaff = staffData.filter((staff) => staff.Role === "Mechanic");

  // Define a function to determine the status style
  const getStatusStyle = (status) => {
    switch (status) {
      case "Free":
        return { color: "green", label: "Free" };
      case "On Task":
        return { color: "yellow", label: "On Task" };
      case "Day Off":
        return { color: "red", label: "Day Off" };
      default:
        return { color: "gray", label: "Unknown" };
    }
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
              setCurrentPage("staff");
              setSelectedStaff(null);
            }}
          >
            Staff /
          </span>
          {currentPage === "details" && selectedStaff && (
            <span className="BreadCrumb-child">{selectedStaff.Name} /</span>
          )}
        </div>
      </div>

      {/* Staff Section */}
      {currentPage === "staff" && (
        <div className="staff-container">
          {mechanicStaff.map((staff, index) => {
            const { color, label } = getStatusStyle(staff.MechanicStatus);

            return (
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
                <div className="company-name">{staff.Name}</div>
                <div
                  className="mechanic-status"
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      border: "2px solid black",
                      backgroundColor: color,
                    }}
                  ></div>
                  <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Status: {label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default User;
