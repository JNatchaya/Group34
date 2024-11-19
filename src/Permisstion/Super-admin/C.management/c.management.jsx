import React, { useState } from "react";
import { useCombinedData } from "../../../DATA/CombinedDataContext";
import "./c.management.css";

function C_management_tab() {
  const combinedData = useCombinedData();
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [currentPage, setCurrentPage] = useState("company"); // Current page: 'company' or 'department'

  return (
    <div className="c-management-container">
      {/* Top Section */}
      <div className="container-top">
        <div className="Breadcrumb">
          <span className="bi bi-folder-fill"></span>
          <span
            className="BreadCrumb-child"
            onClick={() => {
              setCurrentPage("company");
              setSelectedCompany(null);
              setSelectedDepartment(null);
            }}
          >
            Companies /
          </span>
          {currentPage === "department" && selectedCompany && (
            <span
              className="BreadCrumb-child"
              onClick={() => {
                setCurrentPage("department");
                setSelectedDepartment(null);
              }}
            >
              {selectedCompany.CMname} /
            </span>
          )}
        </div>
      </div>

      {/* Company Page */}
      {currentPage === "company" && (
        <div className="company-container">
          {combinedData.map((company, index) => (
            <div
              key={index}
              className={`account-item ${
                selectedCompany?.CMname === company.CMname ? "active" : ""
              }`}
              onClick={() => {
                setSelectedCompany(company);
                setSelectedDepartment(null);
                setCurrentPage("department"); // Switch to department page
              }}
            >
              <div className="company-logo"></div>
              <div className="company-name">
                {company.CMname}
                <span className="department-count">
                  Departments ({company.DPCH.length})
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Department Page */}
      {currentPage === "department" && selectedCompany && (
        <div className="company-container">
          {selectedCompany.DPCH.map((department, index) => (
            <div
              key={index}
              className={`account-item ${
                selectedDepartment?.DPName === department.DPName ? "active" : ""
              }`}
              onClick={() => setSelectedDepartment(department)}
            >
              <div className="company-logo"></div>
              <div className="company-name">{department.DPName}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default C_management_tab;
