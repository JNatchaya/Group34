import React, { useState } from "react";
import GReport from "../G-report/G-report";
import "./G-dashboard.css";

function GDashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard"); 

  // เปลี่ยนหน้า
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === "dashboard" && (
        <div className="g-dashboard-container">
          <div className="g-dashboard-header">
            <div className="g-logo"></div>
          </div>
          <div className="g-dashboard-body">
            <div className="g-dashboard">
              <h3>Dashboard</h3>
            </div>
            <div className="g-department">
              <div className="d-deL">
                <div className="d-department-name">
                  <span>
                    <i className="bi bi-circle-fill"></i>
                  </span>
                  <h5>Department name</h5>
                </div>
                <div className="d-fire-img">
                  <h8>Fire extinguisher image</h8>
                </div>
              </div>
              <div className="d-deR">
                <div className="list-df">
                  <h8>fire extinguisher Serial number</h8>
                  <div className="status-container">
                    <p>Status</p>
                    <span>
                      <i className="bi bi-circle-fill"></i>
                    </span>
                  </div>
                </div>
                <div className="list-df">
                  <h8>Types of fire extinguishers :</h8>
                </div>
                <div className="list-df">
                  <h8>Previous Check round Date :</h8>
                </div>
                <div className="list-df">
                  <h8>Next Check round Date :</h8>
                </div>
              </div>
            </div>
            <div className="g-history">
              <div className="gh-text">
                <h5>Fire extinguisher inspection history :</h5>
              </div>
              <div className="list-gh-container">
                <div className="list-gh">
                  <h8>23/09/2024</h8>
                  <h8>normally</h8>
                </div>
                <div className="list-gh">
                  <h8>22/06/2024</h8>
                  <h8>normally</h8>
                </div>
                <div className="list-gh">
                  <h8>21/03/2024</h8>
                  <h8>normally</h8>
                </div>
                <div className="list-gh">
                  <h8>22/12/2023</h8>
                  <h8>fire extinguisher was replaced </h8>
                </div>
                <div className="list-gh">
                  <h8>23/09/2023</h8>
                  <h8>normally</h8>
                </div>
                <div className="list-gh">
                  <h8>21/06/2023</h8>
                  <h8>normally</h8>
                </div>
              </div>
            </div>
          </div>
          <div className="g-report">
            <button onClick={() => handlePageChange("report")}>report</button>
          </div>
        </div>
      )}

      {currentPage === "report" && <GReport handlePageChange={handlePageChange} />} {/* ส่งฟังก์ชัน handlePageChange ไปยัง GReport */}
    </>
  );
}

export default GDashboard;
