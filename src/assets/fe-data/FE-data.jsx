import React from "react";
import "./FE-data.css";
import { fetchFireExtinguisherData } from "../../DATA/fireExtinguisherData";
import {
  History_info,
  createSectionsFromHistory,
} from "../../DATA/history-info";

function FEdata({ selectedSerialNumber, setSelectedSerialNumber }) {
  const fireExtinguisherData = fetchFireExtinguisherData();

  //ข้อมูลใน fireExtinguisherData
  const matchingData = fireExtinguisherData
    .flatMap((department) =>
      department.fire.map((fire) => ({
        ...fire,
        DPName: department.DPName,
      }))
    )
    .find((fire) => fire.serialNumber === selectedSerialNumber);

  //ข้อมูลใน History_info
  const historyData = History_info.find(
    (history) => history.serialNumber === selectedSerialNumber
  );


  return (
    <div className="fe-container">
      <div className="fe-top">
        <div className="fe-dp-name">
          <h3>{matchingData ? `${matchingData.DPName}` : "No Data Found"}</h3>
        </div>
      </div>
      <div className="fe-bottom">
        <div className="fe-bt-left">
          <div className="fe-image">
            <h5>Fire Extinguisher Image</h5>
          </div>
          <div className="fe-detail">
            <h6>Serial Number: {matchingData?.serialNumber || "N/A"}</h6>
            <div className="status-group">
              <h6>Status</h6>
              <i
                className="bi bi-circle-fill"
                style={{
                  color:
                    matchingData?.status === "Active"
                      ? "green"
                      : matchingData?.status === "Inactive"
                      ? "red"
                      : "gray",
                }}
              ></i>
            </div>
          </div>
          <div className="fe-detail">
            <h6>Type of Fire Extinguisher :</h6>
            <h6>{matchingData?.type || "N/A"}</h6>
          </div>
          <div className="fe-detail">
            <h6>Previous Check Round Date : </h6>
            <h6>{historyData?.date || "No data available"}</h6>
          </div>
          <div className="fe-detail">
            <h6>Next Check Round Date : </h6>
            <h6>{matchingData?.nextMaintenance || "No data available"}</h6>
          </div>
        </div>
        {/* ส่วน Inspection History */}
        <div className="fe-bt-right">
          <div className="fe-history">
            <div className="fe-history-text">
              <h5>Fire Extinguisher Inspection History</h5>
            </div>
            <div className="fe-history-line">
              {historyData ? (
                historyData.comment.map((comment, index) => (
                  <div className="fe-task-card" key={index}>
                    <h6>{comment["date-sub"] || "N/A"}</h6>
                    <h6>
                      {comment.requiredChange
                        ? "Fire extinguisher was replaced"
                        : "Normally"}
                    </h6>
                  </div>
                ))
              ) : (
                <div className="fe-task-card">
                  <h6>No history available.</h6>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FEdata;
