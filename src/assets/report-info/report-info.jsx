import React, { useState } from "react";

import { History_info } from "../../DATA/history-info";
import { createSectionsFromHistory } from "../../DATA/history-info";

import "./report-info.css";

function ReportInfo({ permissions, serial }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const matchInfo = History_info.find((item) => item.serialNumber === serial);
  if (!matchInfo) {
    matchInfo = [];
  }
  console.log(matchInfo)

  // Assuming History_info is imported
  const selectedHistoryItem = serial;
  const sections = createSectionsFromHistory(selectedHistoryItem);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="report-info-container">
      <div className="report-header">
        <div className="grid grid-item1">
          <div className="dp-name box-shadows">{matchInfo.DPName}</div>
        </div>
        <div className="grid grid-item2">
          {permissions === "SuperAdmin" && (
            <div className="report-status-title">
              <div className="report-item1 box-shadows">
                Task Holder :<span>{matchInfo.taskHolder}</span>
              </div>
              <div className="report-item2 box-shadows">
                Admin Holder: <span>{matchInfo.addminHolder}</span>
              </div>
              <div className="report-item3 box-shadows">
                State: <span>{matchInfo.status}</span>
              </div>
              <div className="report-item4 box-shadows">
                Date: {matchInfo.date}
              </div>
            </div>
          )}
          {permissions === "Admin_done" && (
            <div className="report-status-title-admin-done">
              <div className="report-item5 box-shadows">
                Task Holder:<span>{matchInfo.taskHolder}</span>{" "}
              </div>
              <div className="report-item6 box-shadows">
                Admin Holder: <span>{matchInfo.addminHolder}</span>
              </div>
            </div>
          )}
          {permissions === "Admin_undone" && (
            <div className="report-status-title-admin-undone">
              <div className="report-item7 box-shadows">
                Task Holder:<span>{matchInfo.taskHolder}</span>
              </div>
              <div className="report-item8 box-shadows">Approve</div>
              <div className="report-item9 box-shadows">Reject</div>
            </div>
          )}
        </div>
      </div>
      <div className="report-body-user">
        <div className="grid grid-item3">
          <div className="report-image-title">Report Image</div>
          <div className="report-image-inner box-shadows">
            <div className="report-image">
              <img src="" alt="" />
            </div>
            <div className="report-detail-title">
              Report Detail
              <div className="report-detail-inner">
                {matchInfo.reportDetails}
              </div>
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
                      <input
                        className="checkbox"
                        type="checkbox"
                        disabled
                        checked={section.status === "Green"}
                      />
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
                  <span className="well">
                    <input
                      type="checkbox"
                      disabled
                      checked={matchInfo.comment[0]?.well === "true"}
                    />
                  </span>
                </div>
                <div className="comment box-shadows">
                  A bit of maintain
                  <span className="bi bi-square-fill"></span>
                </div>
                <div className="comment box-shadows">
                  Required Change
                  <span className="bi bi-square-fill"></span>
                </div>
                <div className="comment box-shadows">Other</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportInfo;
