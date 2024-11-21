import React from "react";
import { useNavigate } from "react-router-dom";
import MapComponent from "../../../assets/leaflet/leaflet";
import { CM } from "../../../DATA/companyData";
import { fire_extinguisher_data } from "../../../DATA/fireExtinguisherData";

import "./map.css";

function MapContainer({ setSatab }) {
  const navigate = useNavigate();

  function matchCompanyWithFireExtinguishers() {
    return CM.map((company) => {
      const matchedDepartments = company.DPCH.map((department) => {
        const fireData = fire_extinguisher_data.find(
          (fireData) => fireData.DPName === department.DPName
        );
        return {
          ...department,
          fire: fireData ? fireData.fire : [],
        };
      });

      return {
        CMname: company.CMname,
        status: company.status,
        due: company.due,
        DPCH: matchedDepartments,
      };
    });
  }

  const handleBackClick = () => {
    setSatab("C_management");
    navigate("/C_management");
  };

  const matchedData = matchCompanyWithFireExtinguishers();
  const totalClients = matchedData.length;
  const totalDepartments = matchedData.reduce(
    (acc, company) => acc + company.DPCH.length,
    0
  );
  const totalFireExtinguishers = matchedData.reduce((acc, company) => {
    return (
      acc +
      company.DPCH.reduce(
        (depAcc, department) => depAcc + department.fire.length,
        0
      )
    );
  }, 0);

  return (
    <div className="map-container">
      <div className="Back-Button" onClick={handleBackClick}>
        return
      </div>
      <div className="map-section">
        <MapComponent />
      </div>

      <div className="summary-section">
        <h1 className="summary-title">SUMMARY</h1>
        <div className="summary-stats">
          <div className="stat-box">
            <p className="stat-unit" style={{ fontWeight: "bold" }}>
              Client
            </p>
            <p className="stat-value">{totalClients}</p>
            <p className="stat-unit">UNIT</p>
          </div>
          <div className="stat-box">
            <p className="stat-unit" style={{ fontWeight: "bold" }}>
              Department
            </p>
            <p className="stat-value">{totalDepartments}</p>
            <p className="stat-unit">UNIT</p>
          </div>
          <div className="stat-box">
            <p className="stat-unit" style={{ fontWeight: "bold" }}>
              Fire extinguisher installed
            </p>
            <p className="stat-value">{totalFireExtinguishers}</p>
            <p className="stat-unit">UNIT</p>
          </div>
        </div>
        <div className="summary-table">
          <div className="table-header">
            <div className="header-cell">Client</div>
            <div className="header-cell">Department</div>
            <div className="header-cell">Tank Installed</div>
            <div className="header-cell">Percentage</div>
          </div>
          <div className="table-body">
            {matchedData.map((company, companyIndex) =>
              company.DPCH.map((department, depIndex) => {
                const fireExtinguishers = department.fire;
                const totalFireExtinguishersInDept = fireExtinguishers.length;

                const activeFireExtinguishers = fireExtinguishers.filter(
                  (fire) => fire.status === "Active"
                ).length;

                const inactiveFireExtinguishers = fireExtinguishers.filter(
                  (fire) => fire.status === "Inactive"
                ).length;

                const disabledFireExtinguishers = fireExtinguishers.filter(
                  (fire) => fire.status === "Disabled"
                ).length;

                const activePercentage =
                  totalFireExtinguishersInDept > 0
                    ? (activeFireExtinguishers / totalFireExtinguishersInDept) *
                      100
                    : 0;

                const inactivePercentage =
                  totalFireExtinguishersInDept > 0
                    ? (inactiveFireExtinguishers /
                        totalFireExtinguishersInDept) *
                      100
                    : 0;

                const disabledPercentage =
                  totalFireExtinguishersInDept > 0
                    ? (disabledFireExtinguishers /
                        totalFireExtinguishersInDept) *
                      100
                    : 0;

                return (
                  <div className="table-row" key={depIndex}>
                    <div className="cell">
                      <span
                        className="company-color-indicator"
                        style={{ backgroundColor: department.color }}
                      ></span>
                      {company.CMname}
                    </div>
                    <div className="cell">{department.DPName}</div>
                    <div className="cell">{totalFireExtinguishersInDept}</div>
                    <div className="cell">
                      <div className="percentage-bar">
                        <span
                          className="green-bar"
                          style={{ width: `${activePercentage}%` }}
                        ></span>
                        <span
                          className="yellow-bar"
                          style={{ width: `${inactivePercentage}%` }}
                        ></span>
                        <span
                          className="red-bar"
                          style={{ width: `${disabledPercentage}%` }}
                        ></span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapContainer;
