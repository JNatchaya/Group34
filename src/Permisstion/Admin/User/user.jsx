import React, { useState } from "react";
import { fetchStaffData } from "../../../DATA/staffData"; // Import your staff data module
import "./user.css";
import "../../Super-admin/staffmanage/userprofile.css";
import "../../Super-admin/staffmanage/staffmanage.css";
import ReportInfo from "../../../assets/report-info/report-info";

function User() {
  const staffData = fetchStaffData(); // Fetch staff data
  const [userData, setUserData] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [currentPage, setCurrentPage] = useState("staff");
  const [permission, setPermission] = useState("Admin");
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [serial, setSerial] = useState(null);

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

  const behaviorChartData = userData?.Behavior?.[0]?.Month
    ? {
        labels: userData.Behavior[0].Month.map((month) => month.MonthName),
        datasets: [
          {
            label: "Behavior Score",
            data: userData.Behavior[0].Month.map(
              (month) => month.BehaviorScore
            ),
            fill: false,
            borderWidth: 2,
            backgroundColor: getComputedStyle(
              document.documentElement
            ).getPropertyValue("--point-color"),
            borderColor: getComputedStyle(
              document.documentElement
            ).getPropertyValue("--line-color"),
          },
        ],
      }
    : null;

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
      setSelectedAssignment(null);
    }}
  >
    Staff /
  </span>
  {currentPage !== "staff" && userData && (
    <span
      className="BreadCrumb-child"
      onClick={() => {
        setCurrentPage("details");
        setSelectedAssignment(null);
      }}
    >
      {userData.Name} /
    </span>
  )}
  {currentPage === "Assignment" && selectedAssignment && (
    <span className="BreadCrumb-child">Assignment</span>
  )}
</div>

      </div>

      {/* Staff Section */}
      {currentPage === "staff" && (
        <div className="staff-container" style={{ marginTop: "20px" }}>
          {mechanicStaff.map((staff, index) => {
            const { color, label } = getStatusStyle(staff.MechanicStatus);

            return (
              <div
                key={index}
                className={`account-item ${
                  selectedStaff?.StaffID === staff.StaffID ? "" : ""
                }`}
                onClick={() => {
                  setSelectedStaff(staff);
                  setUserData(staff); // Assuming staff data includes detailed information
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
      {currentPage === "details" && userData && selectedStaff.Role === "Mechanic" && (
        <div className="staffmanage-container">
          <div className="information">
            <div className="user-info">
              <div className="profile-photo">
                <img src="" alt="User Photo" />
              </div>
              <div className="user-details">
                <div className="user-name">{userData.Name}</div>
                <div className="role">{userData.Role}</div>
                <div className="contact-info bi bi-envelope">
                  <span className="email">{userData.Mail}</span>
                </div>
                <div className="contact-info bi bi-telephone">
                  <span className="phone">{userData.Tel}</span>
                </div>
              </div>
            </div>
            <div className="user-description-container">
              <div className="user-description-header">User Information</div>
              <div className="user-description-body">
                {userData.UserInformation.map((information) => (
                  <div
                    className="information-body"
                    key={information.informationID}
                  >
                    <div className="information-left">
                      <p>Address: {information.Address}</p>
                      <div>
                        {information.parents.map((parent) => (
                          <div className="parent" key={parent.ParentID}>
                            <p>
                              Parent: {parent.ParentName} ({parent.Relationship})
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
            <div className="edit-button-container">
              <button className="edit-button">Edit</button>
            </div>
          </div>

          {/* Behavior Section (SuperAdmin Only) */}
          {permission === "SuperAdmin" && (
            <div className="behavior-container">
              <div className="behavior-header">Behavior Score</div>
              <div className="behavior-body box-shadows">
                {behaviorChartData ? (
                  <Line
                    data={behaviorChartData}
                    options={{
                      responsive: true,
                      plugins: {
                        title: {
                          display: true,
                          text: "Monthly Behavior Scores",
                        },
                      },
                      scales: {
                        x: {
                          title: {
                            display: true,
                            text: "Months",
                          },
                        },
                        y: {
                          title: {
                            display: true,
                            text: "Scores",
                          },
                          min: 0,
                          max: 100,
                        },
                      },
                    }}
                  />
                ) : (
                  <p>No behavior data available</p>
                )}
              </div>
            </div>
          )}

          {/* Assignment Footprint */}
          <div className="assignment-footprint-container-admin">
            <div className="assignment-footprint-header-admin">Assignment Footprint</div>
            <div className="assignment-footprint-admin box-shadows">
              <div className="assignment-footprint-body-admin">
                {userData.AssignmentFootprint.map((assignment) => (
                  <div
                    className="assignment-admin box-shadows"
                    key={assignment.AssignmentID}
                    onClick={() => {
                      setCurrentPage("Assignment");
                      setSelectedAssignment(assignment.AssignmentID);
                      setSerial(assignment.serialNumber);
                    }}
                  >
                    <div className="assignment-left-admin">
                      <p>
                        {assignment.Date} / {assignment.Task} / {assignment.Status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Assignment Details */}
      {currentPage === "Assignment" && selectedAssignment && (
        <ReportInfo serial={serial} />
      )}
    </div>
  );
}

export default User;

