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

      {/* Staff Details Section */}
      {currentPage === "details" && userData && (
        <div className="staffmanage-container">
          <div className="information">
            <div className="user-info">
              <div className="profile-photo">
                <img src="" alt="User Photo" />
              </div>
              <div className="user-details">
                <div className="user-name">{userData.Name}</div>
                <div className="role">{userData.Role}</div>
                <div className="contact-info bi bi-envelope">&nbsp;&nbsp;{userData.Mail}</div>
                <div className="contact-info bi bi-telephone">&nbsp;{userData.Tel}</div>
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
                      <p>Address:{information.Address}</p>
                      <div>
                        {information.parents.map((parent) => (
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
              <div className="edit-button-container">
                <button className="edit-button">Edit</button>
              </div>
            </div>
          </div>
          <div className="behavior-container">
            <div className="behavior-header">Behavior Score</div>
            <div className="behavior-body">{userData.BehaviorScore}</div>
          </div>

          <div className="assignment-footprint-container">
            <div className="assignment-footprint-header">
              Assignment Footprint
            </div>
            <div className="assignment-footprint">
              <div className="assignment-footprint-body">
                {userData.AssignmentFootprint.map((assignment) => (
                  <div className="assignment" key={assignment.AssignmentID}>
                    <div className="assignment-left">
                      <p>
                        {assignment.Date} / {assignment.Task} /{" "}
                        {assignment.Status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StaffManagement_tab;
