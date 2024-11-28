import React, { useState } from "react";
import GReport from "../G-report/G-report";
import "./G-dashboard.css";

function GDashboard({ onReturnToMechanic }) { 
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
            <div className="g-logo" onClick={onReturnToMechanic}></div> 
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
                  <h5>Alpha Department </h5>
                </div>
                <div className="d-fire-img">
                  <h8>Fire extinguisher image</h8>
                </div>
              </div>
              <div className="d-deR">
                <div className="list-df">
                  <h8>SN789012</h8>
                  <div className="g-status-container">
                    <p>Status</p>
                    <span>
                      <i className="bi bi-circle-fill"></i>
                    </span>
                  </div>
                </div>
                <div className="list-df">
                  <h8>Types : Dry Chemical</h8>
                </div>
                <div className="list-df">
                  <h8>Previous Check round Date : 2024-09-15</h8>
                </div>
                <div className="list-df">
                  <h8>Next Check round Date : 2024-12-15</h8>
                </div>
              </div>
            </div>
            <div className="g-history">
              <div className="gh-text">
                <h5>Fire extinguisher inspection history :</h5>
              </div>
              <div className="list-gh-container">
                <div className="list-gh">
                  <h8>23/06/2024</h8>
                  <h8>normally</h8>
                </div>
                <div className="list-gh">
                  <h8>22/03/2024</h8>
                  <h8>normally</h8>
                </div>
                <div className="list-gh">
                  <h8>21/12/2023</h8>
                  <h8>normally</h8>
                </div>
                <div className="list-gh">
                  <h8>22/09/2023</h8>
                  <h8>fire extinguisher was replaced </h8>
                </div>
                <div className="list-gh">
                  <h8>23/06/2023</h8>
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

      {currentPage === "report" && <GReport handlePageChange={handlePageChange} />}
    </>
  );
}

export default GDashboard;
