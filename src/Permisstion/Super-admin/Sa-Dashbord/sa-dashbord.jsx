import { useState } from "react";
import Input from "../../../assets/input";
import FireAdd from "../../../assets/FIRE-EXTINGUISHER-Add/fire-add";
import Add from "../../../assets/add/add";
import { useCombinedData } from "../../../DATA/CombinedDataContext";
import "./sa-dashbord.css";

function SaDashBord({ selectedDepartment, permiss }) {
  const [more, setMore] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);

  const fireData = selectedDepartment?.fire || []; // Dynamic fire extinguisher data

  return (
    <div className="Sa-dashbord-container">
      {toggle && <FireAdd setToggle={setToggle} />}
      {open && (
        <Add
          firstIn={"Request"}
          SecIn={"Title"}
          TirdIn={"Type"}
          fortIn={"Reason"}
          setOpen={setOpen}
        />
      )}
      <div className="container-bottom">
        <div className="bottom-left">
          <div className="department-container">
            <div
              className="dp-name box-shadows"
              onClick={() => {
                setMore(!more);
              }}
            >
              {selectedDepartment?.DPName || "Department"}{" "}
              <span
                style={{ color: "white" }}
                className={`bi bi-caret-down-fill ${more ? "downActive" : ""}`}
              ></span>
              <div className={`more-container ${more ? "moreCactive" : ""} box-shadows`}>

                <div className="more-child">
                  <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                    Date of Membership
                  </span>
                  <span style={{ fontSize: "1rem" }}>
                    {selectedDepartment?.DPMemDate || "N/A"}
                  </span>
                </div>
                <div className="more-child">
                  <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    Date of Expiry
                  </span>
                  <span style={{ fontSize: "1rem" }}>
                    {selectedDepartment?.DPMemExp || "N/A"}
                  </span>
                </div>
                <div className="more-child">
                  <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    Location
                  </span>
                  <span style={{ fontSize: "1rem" }}>
                    {selectedDepartment?.DPlocatename || "N/A"}
                  </span>
                  <span style={{ color: "blue", fontSize: "1rem", cursor: "pointer" }}>
                    <br />View Location
                  </span>
                </div>
              </div>
            </div>
            <button className="edit box-shadows">Edit</button>
          </div>
          <div className="sec-container">
            <h3>FIRE EXTINGUISHER DATA</h3>
            <div className="dp-container box-shadows">
              <div className="dp-container-top">
                <div
                  className="add-type box-shadows"
                  onClick={() => {
                    permiss === "SuperAdmin" ? setToggle(!toggle) : setOpen(!open);
                  }}
                >
                  <span className="bi bi-plus-circle" style={{ marginRight: "1rem" }}></span>
                  <span style={{ fontSize: "0.8rem" }}>
                    {permiss === "SuperAdmin" ? "Add" : "Request"}
                  </span>
                </div>
                <Input />
              </div>
              <div className="dp-container-bottom">
                {fireData.length ? (
                  fireData.map((fire, index) => (
                    <div className="dp-child" key={index}>
                      <div>
                        <span>Serial Number: {fire.serialNumber}</span>
                      </div>
                      <div className="info">
                        <span>Status: {fire.status}</span>
                        <div className="status-circle"
                          style={{
                            width: "15px",
                            height: "15px",
                            backgroundColor: fire.status === "Active" ? "green" : "red",
                            borderRadius: "100%",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No fire extinguisher data available</p>
                )}
              </div>
            </div>
          </div>
          <div className="bottom-share-container">
            <div className="chart-container">
              <div className="chart"></div>
            </div>
            <div className="sec-container">
              <h3> Report history </h3>
              <div className="dp-container box-shadows">
                <div className="dp-container-top">
                  <Input />
                </div>
                <div className="dp-container-bottom">
                  {fireData?.length ? (
                    fireData.map((fire, index) => (
                      <div className="dp-child" key={index}>
                        {/* Serial Number and Location */}
                        <span>Serial Number: {fire.serialNumber}</span>
                        <span>Location: {fire.location}</span>

                        {/* Optional: Display additional information */}
                        <div className="info">
                          <span style={{ fontSize: "0.8rem" }}>
                            {fire.lastMaintenanceDate}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No fire extinguisher data available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-right">
          <div className="round-container">
            <div className="round-child">
              Check round circular{" "}
              <span style={{ color: "white" }}>
                {selectedDepartment?.CheckRoundCircular || ""}
              </span>
            </div>
            <div className="round-child">
              Next Check round Date{" "}
              <span style={{ color: "white" }}>
                {selectedDepartment?.NextCheckRoundDate || ""}
              </span>
            </div>
            <div className="round-child">
              previous Check round Date{" "}
              <span style={{ color: "white" }}>
                {selectedDepartment?.PreviousCheckRoundDate || ""}
              </span>
            </div>
          </div>

          <div className="sec-container" style={{ gridRow: "span 2" }}>
            <h3> Report list </h3>
            <div className="dp-container dp-report box-shadows">
              <div className="dp-container-top">
                <Input />
              </div>
              <div className="dp-container-bottom">
                {fireData?.length ? (
                  fireData.map((fire, index) => (
                    <div key={index} className="dp-child">
                      <span>{fire.serialNumber || "N/A"}</span>
                      <div
                        className="info"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "row",
                        }}
                      >
                        <span
                          style={{ fontSize: "0.8rem", marginRight: "1rem" }}
                        >
                          {fire.lastMaintenance || "N/A"}
                        </span>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <span style={{ fontSize: "0.8rem" }}>Status</span>
                          <div
                            style={{
                              width: "15px",
                              height: "15px",
                              backgroundColor:
                                fire.status === "Active" ? "green" : "red",
                              borderRadius: "100%",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No fire extinguisher data available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaDashBord;
