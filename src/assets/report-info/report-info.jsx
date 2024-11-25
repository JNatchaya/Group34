import React,{ useState } from "react";

import"./report-info.css";

function ReportInfo () {
    const [permission, setPermission] = useState("SuperAdmin");
    const [expandedSection, setExpandedSection] = useState(null);
  
    const sections = [
      { title: "Pressure Gauge", content: "Details about the pressure gauge..." },
      { title: "Pull Pin and Temper Seal", content: "Details about the pull pin..." },
      { title: "Handle", content: "Details about the handle..." },
      { title: "Hose", content: "Details about the hose..." },
      { title: "Fire Extinguisher Body", content: "Details about the extinguisher body..." },
      { title: "Fire Extinguisher Expire", content: "Details about expiration..." },
    ];
  
    const toggleSection = (index) => {
      setExpandedSection(expandedSection === index ? null : index);
    };
  
  
    return (
      <div className="report-info-container">
       <div className="search-container">
      <input type="text" placeholder="Search" className="search-bar" />
    </div> 
        <div className="report-header">
          <div className="grid grid-item1">
            <div className="dp-name box-shadows">

            </div>
          </div>
          <div className="grid grid-item2">
            {permission === "SuperAdmin" && (
              <div className="report-status-title">
                <div className="report-item1 box-shadows">Task Holder</div>
                <div className="report-item2 box-shadows">Admin Holder</div>
                <div className="report-item3 box-shadows">State</div>
                <div className="report-item4 box-shadows">Admin_done</div>
              </div>
            )}
            {permission === "Admin_done" && (
              <div className="report-status-title-admin-done">
                <div className="report-item5 box-shadows">Task Holder</div>
                <div className="report-item6 box-shadows">Admin Holder</div>
              </div>
            )}
            {permission === "Admin_undone" && (
              <div className="report-status-title-admin-undone">
                <div className="report-item7 box-shadows">Task Holder</div>
                <div className="report-item8 box-shadows">Approve</div>
                <div className="report-item9 box-shadows">Reject</div>
              </div>
            )}
          </div>
        </div>
        <div className="report-body">
          <div className="grid grid-item3">
            <div className="report-image-title">Report Image</div>
            <div className="report-image-inner box-shadows">
              <div className="report-image">
                <img src="" alt="" />
              </div>
              <div className="report-detail-title">
                Report Detail
                <div className="report-detail-inner"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-item4">
            <div className="check-list-title">Check List</div>
            <div className="check-list-inner box-shadows">
            <div className="accordion">
        {sections.map((section, index) => (
          <div key={index} className="accordion-item">
            <div
              className={`accordion-header ${
                expandedSection === index ? "active" : ""
              }`}
              onClick={() => toggleSection(index)}
            >
              <span>{section.title}</span>
              <div className="accordion-right">
              <span className="expand-icon">
                {expandedSection === index ? "▲" : "▼"}
              </span>
              <span className="bi bi-square-fill"></span>
              </div>
            </div>
            {expandedSection === index && (
              <div className="accordion-body">{section.content}</div>
            )}
          </div>
        ))}
      </div>
            </div>
          </div>
          <div className="grid grid-item5 sup-inner">
            <div className="grid grid-item6">
              <div className="image-evidence-title">Image Evidence</div>
              <div className="image-evidence-inner box-shadows"></div>
            </div>
            <div className="grid grid-item7">
              <div className="comment-title">Comment</div>
              <div className="comment-inner box-shadows">
                <div className="comment-box box-shadows">
                  <div className="comment box-shadows">
                      Well
                      <span className="bi bi-square-fill"></span>
                  </div>
                  <div className="comment box-shadows">
                      A bit of maintain
                      <span className="bi bi-square-fill"></span>
                  </div>
                  <div className="comment box-shadows">
                      Required Change
                      <span className="bi bi-square-fill"></span>
                  </div>
                  <div className="comment box-shadows">
                      Other
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default ReportInfo;