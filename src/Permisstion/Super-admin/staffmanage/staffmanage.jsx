import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

import ReportInfo from "../../../assets/report-info/report-info";
import "./staffmanage.css";

import { fetchStaffData, fetchStaffByID } from "../../../DATA/staffData";

function StaffManagement() {
  const [staffData, setStaffData] = useState(null);
  const [selectedStaffID, setSelectedStaffID] = useState(null); 
  const [selectedAssignment, setSelectedAssignment] = useState(null); 
  const [currentPage, setCurrentPage] = useState("staff"); 
  const [userData, setUserData] = useState(null); 
  const [serial, setserial] = useState(""); 
  const [permission, setpermission] = useState("SuperAdmin"); 
 
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchStaffData(); // Simulate data fetching
        setStaffData(data); // Set fetched data
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    }
    fetchData();
  }, []);

  // Fetch specific staff details when selectedStaffID changes
  useEffect(() => {
    if (selectedStaffID) {
      const data = fetchStaffByID(selectedStaffID);
      setUserData(data); // Set user details for the selected staff
    }
  }, [selectedStaffID]);

  const behaviorChartData = userData?.Behavior[0]?.Month
    ? {
        labels: userData.Behavior[0].Month.map((month) => month.MonthName),
        datasets: [
          {
              label: "Behavior Score",
              data: userData.Behavior[0].Month.map((month) => month.BehaviorScore),
              fill: false,
              borderWidth: 2,
              backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--point-color'),
              borderColor: getComputedStyle(document.documentElement).getPropertyValue('--line-color'),
          },
      ]
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
          {currentPage === "details" && userData && (
            <span className="BreadCrumb-child">{userData.Name} /</span>
          )}
        </div>
        {currentPage === "staff" && (
    <div className="search-container">
      <input type="text" placeholder="Search" className="search-bar" />
    </div>
  )}
      </div>
      

      {/* Staff List Section */}
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
            <div>Loading staff data...</div> // Show loading state if staffData is null
          )}
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
            <div className="edit-button-container">
                <button className="edit-button">Edit</button>
              </div>
          </div>
          
  {permission === "SuperAdmin" && (
    <>
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
        {/* {userData.BehaviorScore} */}
        </div>
    </div>
    <div className="assignment-footprint-container">
    <div className="assignment-footprint-header">Assignment Footprint</div>
    <div className="assignment-footprint box-shadows">
      <div className="assignment-footprint-body">
        {userData.AssignmentFootprint.map((assignment) => (
          <div
            className="assignment box-shadows"
            key={assignment.AssignmentID}
            onClick={() => {
              setCurrentPage("Assignment");
              setSelectedAssignment(assignment.AssignmentID);
              setserial(assignment.serialNumber);
            }}
          >
            <div className="assignment-left">
              <p>
                {assignment.Date} / {assignment.Task} / {assignment.Status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
    </>
  )}
  {permission === "Admin" && (
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
              setserial(assignment.serialNumber);
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
  )}
        </div>
      )}
      {currentPage === "Assignment" && selectedAssignment && (

          <ReportInfo serial={serial}/>
      )}
    </div>
  );
}

export default StaffManagement;


