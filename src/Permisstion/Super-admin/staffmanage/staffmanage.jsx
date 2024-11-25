import React, { useState, useEffect } from "react";
import "./staffmanage.css";
import "./userprofile.css";
import { fetchStaffData, fetchStaffByID } from "../../../DATA/staffData";

function StaffManagement() {
  const [staffData, setStaffData] = useState(null); // All staff data
  const [userData, setUserData] = useState(null); // Specific user data for details page
  const [selectedStaffID, setSelectedStaffID] = useState(null); // Selected staff ID
  const [currentPage, setCurrentPage] = useState("staff"); // Page state: "staff" or "details"

  // Fetch all staff data on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchStaffData();
        setStaffData(data); // Set all staff data
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    }
    fetchData();
  }, []);

  // Fetch specific staff details when a staff member is selected
  useEffect(() => {
    async function fetchUserDetails() {
      if (selectedStaffID) {
        try {
          const data = await fetchStaffByID(selectedStaffID);
          setUserData(data); // Set selected staff's user data
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    }
    fetchUserDetails();
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
              setUserData(null);
            }}
          >
            Staff /
          </span>
          {currentPage === "details" && userData && (
            <span className="BreadCrumb-child">{userData.Name} /</span>
          )}
        </div>
      </div>
      {currentPage === "staff" && (
    <div className="search-container">
      <input type="text" placeholder="Search" className="search-bar" />
    </div>
  )}

      {/* Staff List Page */}
      {currentPage === "staff" && (
        <div className="staff-container" style={{marginTop: "20px"}}>
          {staffData ? (
            staffData.map((staff) => (
              <div
                key={staff.StaffID}
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
            ))
          ) : (
            <div>Loading staff data...</div>
          )}
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
                              Parent: {parent.ParentName} (
                              {parent.Relationship})
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
          <div className="behavior-container">
            <div className="behavior-header">Behavior Score</div>
            <div className="behavior-body">
              {userData.BehaviorScore || "N/A"}
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

export default StaffManagement;



