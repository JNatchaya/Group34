import React from "react";
import "./FE-data.css";
import { fetchFireExtinguisherData } from "../../DATA/fireExtinguisherData";

function FEdata({ selectedSerialNumber ,setSelectedSerialNumber}) {
  const fireExtinguisherData = fetchFireExtinguisherData();

  const matchingData = fireExtinguisherData
    .flatMap((department) =>
      department.fire.map((fire) => ({
        ...fire,
        DPName: department.DPName,
      }))
    )
    .find((fire) => fire.serialNumber === selectedSerialNumber);

  return (
    <div className="fe-container">
      <div className="fe-top">
        <div className="fe-dp-name">
          <h2>{matchingData ? ` ${matchingData.DPName}` : "No Data Found"}</h2>
        </div>
      </div>
      <div className="fe-bottom">
        <div className="fe-bt-left">
          {matchingData ? (
            <>
              <div className="fe-image">
                <h5>Fire Extinguisher Image</h5>
              </div>
              <div className="fe-detail">
                <h6>Serial Number: {matchingData.serialNumber}</h6>
                <div className="status-group">
                  <h6>Status</h6>
                  <i
                    className="bi bi-circle-fill"
                    style={{
                      color:
                        matchingData.status === "Active"
                          ? "green"
                          : matchingData.status === "Inactive"
                          ? "red"
                          : "red",
                    }}
                  ></i>
                </div>
              </div>
              <div className="fe-detail">
                <h6>Type of Fire Extinguisher :</h6> 
                <h6>{matchingData.type}</h6>
              </div>
              <div className="fe-detail">
                <h6>Previous Check Round Date : </h6>
                <h6>{matchingData.lastMaintenance}</h6>
              </div>
              <div className="fe-detail">
                <h6>Next Check Round Date : </h6> 
                <h6>{matchingData.nextMaintenance}</h6>
              </div>
            </>
          ) : (
            <div className="fe-detail">
              <h6>Please select a valid serial number.</h6>
            </div>
          )}
        </div>
        <div className="fe-bt-right">
          <div className="fe-history-text">
            <h4>Fire Extinguisher Inspection History</h4>
          </div>
          <div className="fe-history">
            {matchingData ? (
              <div className="fe-task-card">
                <h6>Date: {matchingData.lastMaintenance}</h6>
              </div>
            ) : (
              <div className="fe-task-card">
                <h6>No history available.</h6>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FEdata;
