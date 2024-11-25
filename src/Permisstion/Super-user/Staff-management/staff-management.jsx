import React, { useState, useEffect } from "react";
import { fetchStaffData } from "../../../DATA/staffData";

function StaffManagementTab() {
  const [staffData, setStaffData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [currentPage, setCurrentPage] = useState("staff");

  useEffect(() => {
    // Fetch staff data when the component mounts
    const fetchData = async () => {
      try {
        const data = await fetchStaffData();
        setStaffData(data);
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };

    fetchData();
  }, []);

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
      {currentPage === "staff" && (
    <div className="search-container">
      <input type="text" placeholder="Search" className="search-bar" />
    </div>
  )}
      {/* Staff Section */}
      {currentPage === "staff" && (
        <div className="staff-container"  style={{marginTop:"20px"}}>
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
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    width: "10%",
                  }}
                >
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default StaffManagementTab;
