import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../assets/input";
import FireAdd from "../../../assets/FIRE-EXTINGUISHER-Add/fire-add";
import Add from "../../../assets/add/add";
import { useCombinedData } from "../../../DATA/CombinedDataContext";
import "./sa-dashbord.css";
import FEdata from "../../../assets/fe-data/FE-data";

function SaDashBord({ selectedDepartment, permiss ,selectedSerialNumber ,setSelectedSerialNumber}) {
  const navigate = useNavigate();
  
  const handleViewLocation = () => {
    // Ensure the selectedDepartment has a valid DPLocation
    if (selectedDepartment?.DPLocation) {
      navigate("../map", { state: { location: selectedDepartment.DPLocation } });
    } else {
      console.error("No location data available for the selected department.");
    }
  };
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);

  const fireData = selectedDepartment?.fire || [];
  const [more, setMore] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // For DPName
  const [isEditingRounds, setIsEditingRounds] = useState(false); // For round-child
 
  const [editableData, setEditableData] = useState({
    DPName: selectedDepartment?.DPName || "Department",
    rounds: [
      selectedDepartment?.CheckRoundCircular || "",
      selectedDepartment?.NextCheckRoundDate || "",
      selectedDepartment?.PreviousCheckRoundDate || "",
    ],
  });
  const handleFire = (event) => {
    const serial = event.currentTarget.getAttribute("data-type");
    setSelectedSerialNumber(serial);
  }
  // Toggles the department name edit state
  const handleEditToggle = () => setIsEditing((prev) => !prev);

  // Toggles the round inputs edit state
  const handleRoundEditButtonToggle = () => {
    setIsEditingRounds((prev) => !prev);
  };

  // Handles changes to DPName and rounds
  const handleInputChange = (field, value) => {
    if (field === "DPName") {
      setEditableData((prev) => ({ ...prev, DPName: value }));
    } else {
      const updatedRounds = [...editableData.rounds];
      updatedRounds[field] = value;
      setEditableData((prev) => ({ ...prev, rounds: updatedRounds }));
    }
  };

  // Renders the input fields or display spans for round values
  const renderRoundInput = (index, label) => (
    <div className="round-child" key={index}>
      {isEditingRounds ? (
        <input
          type={index === 0 ? "number" : "date"}
          value={editableData.rounds[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ) : (
        <span>
          {label}{" "}
          <span style={{ color: "white" }}>
            {editableData.rounds[index]}
            {index === 0 && " month"}
          </span>
        </span>
      )}
    </div>
  );

  return (
    <div className="Sa-dashbord-container">
      {toggle && <FireAdd setToggle={setToggle} selectedDepartment={selectedDepartment}/>}
      {open && (
        <Add
          firstIn={"Request"}
          SecIn={"Title"}
          TirdIn={"Type"}
          fortIn={"Reason"}
          setOpen={setOpen}
        />
      )}
      {selectedSerialNumber != '' && (  <FEdata  selectedSerialNumber={selectedSerialNumber} setSelectedSerialNumber={setSelectedSerialNumber}/>)} 
    
      <div className="container-bottom">
        <div className="bottom-left">
          <div className="department-container">
            <div
              className="dp-name box-shadows"
              onClick={() => setMore(!more)}
            >
              {isEditing ? (
                <input
                  type="text"
                  placeholder="Click to edit"
                  value={editableData.DPName}
                  onChange={(e) => handleInputChange("DPName", e.target.value)}
                  onBlur={handleEditToggle}
                />
              ) : (
                <span>{editableData.DPName}</span>
              )}
              <span
                style={{ color: "white" }}
                className={`bi bi-caret-down-fill ${more ? "downActive" : ""}`}
              ></span>
              <div
                className={`more-container ${
                  more ? "moreCactive" : ""
                } box-shadows`}
              >
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
          <span
            style={{ color: "blue", fontSize: "1rem", cursor: "pointer" }}
            onClick={handleViewLocation}
          >
            <br />View Location
          </span>
        </div>
              </div>
            </div>
            <button
              className="edit box-shadows"
              onClick={() => {
                handleEditToggle();
                handleRoundEditButtonToggle();
              }}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
          <div className="sec-container">
            <h3>FIRE EXTINGUISHER DATA</h3>
            <div className="dp-container box-shadows">
              <div className="dp-container-top">
                <div
                  className="add-type box-shadows"
                  onClick={() => {
                    permiss === "SuperAdmin"
                      ? setToggle(!toggle)
                      : setOpen(!open);
                  }}
                >
                  <span
                    className="bi bi-plus-circle"
                    style={{ marginRight: "1rem" }}
                  ></span>
                  <span style={{ fontSize: "0.8rem" }}>
                    {permiss === "SuperAdmin" ? "Add" : "Request"}
                  </span>
                </div>
                <Input />
              </div>
              <div className="dp-container-bottom">
                {fireData.length ? (
                  fireData.map((fire, index) => (
                    <div className="dp-child" key={index} data-type={fire.serialNumber} onClick={handleFire}>
                      <div>
                        <span>Serial Number: {fire.serialNumber}</span>
                      </div>
                      <div className="info">
                        <span>Status: {fire.status}</span>
                        <div
                          className="status-circle"
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
                        <span>Serial Number: {fire.serialNumber}</span>
                        <span style={{ marginLeft: "auto" }}>Location: {fire.location}</span>
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
            {[
              "Check round circular",
              "Next Check round Date",
              "Previous Check round Date",
            ].map((label, index) => renderRoundInput(index, label))}
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
                          <span style={{ fontSize: "0.8rem" }}>Status:</span>
                          <span
                            style={{
                              fontSize: "0.8rem",
                              color:
                                fire.status === "Active" ? "green" : "red",
                            }}
                          >
                            {fire.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No report data available</p>
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
