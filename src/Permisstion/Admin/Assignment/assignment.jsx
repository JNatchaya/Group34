import React, { useState } from "react";
import { fetchCmData } from "../../../DATA/companyData"; // Import your company data module
import "./assignment.css";

function Assignment() {
    const companyData = fetchCmData(); // Fetch company data
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [currentPage, setCurrentPage] = useState("company");

    return (
        <div className="c-management-container">
            {/* Breadcrumb */}
            <div className="container-top">
                <div className="Breadcrumb">
                    <span className="bi bi-folder-fill"></span>
                    <span
                        className="BreadCrumb-child"
                        onClick={() => {
                            setCurrentPage("company");
                            setSelectedCompany(null);
                        }}
                    >
                        Company /
                    </span>
                    {currentPage === "details" && selectedCompany && (
                        <span className="BreadCrumb-child">
                            {selectedCompany.CMname} /
                        </span>
                    )}
                </div>
                {currentPage === "company" && (
                    <div className="search-container">
                    <input type="text" placeholder="Search" className="search-bar" />
                    </div>
                        )}
            </div>

            {/* Company Section */}
            {currentPage === "company" && (
                <div className="company-container">
                    {companyData.map((company, index) => (
                        <div
                            key={index}
                            className={`account-item ${
                                selectedCompany?.CMname === company.CMname ? "active" : ""
                            }`}
                            onClick={() => {
                                setSelectedCompany(company);
                                setCurrentPage("details");
                            }}
                        >
                            <div className="company-left">
                                <div className="company-logo"></div>
                                <div className="company-name">{company.CMname}</div>
                            </div>
                            <div className="company-right">
    <div className="info-column">
        <span className="label">Due</span>
        <span className="due-text">{company.due || "N/A"}</span>
    </div>
    <div className="info-column">
    <span className="label">Status</span>
    <div className="status-container">
        <span className="status-text">{company.status}</span>
        <span
            className="status-circle"
            style={{
                backgroundColor: getStatusColor(company.status),
            }}
        ></span>
    </div>
</div>

</div>

                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

// Helper function to determine circle color based on status
function getStatusColor(status) {
    switch (status) {
        case "On site":
            return "green";
        case "Waited":
            return "yellow";
        case "Overdue":
            return "red";
        default:
            return "gray";
    }
}

export default Assignment;
