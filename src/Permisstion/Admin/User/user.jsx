import React, { useState } from "react";
import { fetchStaffData } from "../../../DATA/staffData"; // Import your staff data module
import "./user.css";
import "../../Super-admin/staffmanage/userprofile.css";
import "../../Super-admin/staffmanage/staffmanage.css";

function User() {
  const staffData = fetchStaffData(); // Fetch staff data
  const [userData, setUserData] = useState(null);
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
        {currentPage === "staff" && (
    <div className="search-container">
      <input type="text" placeholder="Search" className="search-bar" />
    </div>
  )}
      </div>


      {/* Staff Section */}
      {currentPage === "staff" && (
        <div className="staff-container" style={{marginTop: "20px"}}>
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
                  <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Status
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                      {label}
                    </span>
                    <div
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: color,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* Staff Details Page */}
      {currentPage === "details" && userData && (
        <div className="staffmanage-container">
          <div className="information">
            <div className="user-info">
              <div className="profile-photo">
                <img src={userData.Photo || ""} alt="User Photo" />
              </div>
              <div className="user-details">
                <div className="user-name">{userData.Name}</div>
                <div className="role">{userData.Role}</div>
                <div className="contact-info bi bi-envelope">
                  &nbsp;{userData.Mail}
                </div>
                <div className="contact-info bi bi-telephone">
                  &nbsp;{userData.Tel}
                </div>
              </div>
            </div>
            <div className="user-description-container">
              <div className="user-description-header">User Information</div>
              <div className="user-description-body">
                {userData.UserInformation?.map((information) => (
                  <div
                    className="information-body"
                    key={information.informationID}
                  >
                    <div className="information-left">
                      <p>Address: {information.Address}</p>
                      <div>
                        {information.parents?.map((parent) => (
                          <div className="parent" key={parent.ParentID}>
                            <p>
                              Parent: {parent.ParentName} ({parent.Relationship}
                              )
                            </p>
                            <p>Contact: {parent.Tel}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="information-right">
                      <div className="information-right-inner">
                        <p>Birthday: {information.Birthday}</p>
                        <p>Age: {information.Age}</p>
                        <p>Height: {information.Height}</p>
                        <p>Weight: {information.Weight}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="assignment-footprint-container">
            <div className="assignment-footprint-header">
              Assignment Footprint
            </div>
            <div className="assignment-footprint box-shadows">
              <div className="assignment-footprint-body">
                {userData.AssignmentFootprint?.map((assignment) => (
                  <div className="assignment" key={assignment.AssignmentID}>
                    <div className="assignment-left">
                      <p>
                        {assignment.Date} / {assignment.Task} /{" "}
                        {assignment.Status}
                      </p>
                    </div>
                  </div>
                )) || <p>No assignments available.</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
