import { useState } from "react";
import Input from "../../../assets/input";
import FireAdd from "../../../assets/FIRE-EXTINGUISHER-Add/fire-add";
import Add from "../../../assets/add/add";
import "./sa-dashbord.css";

function SaDashBord({permiss}) {
  const [more, setMore] = useState(false)
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const permisstion = permiss
  return (
    <div className="Sa-dashbord-container">

      {toggle === true &&(
              <FireAdd setToggle={setToggle}/>
      )}
      {open === true &&(
        <Add firstIn={"Request"} SecIn={"Title"} TirdIn={"type"} fortIn={'Reason'} setOpen={setOpen} />
      )}

      <div className="container-top">
        <div className="Breadcrumb">
          <span className="bi bi-folder-fill"></span>
          <span
            className="BreadCrumb-child"
            onClick={() => setTapState("type_tap")}
          >
            dashbord /
          </span>
        </div>
      </div>

      <div className="container-bottom">
        <div className="bottom-left">
          <div className="department-container">
            <div className="dp-name box-shadows" onClick={()=>{setMore(!more)}}>
              Department name ada <span style={{color:'white'}} className={`bi bi-caret-down-fill ${more === true ? ' downActive' : ''}`}></span>
              <div className={`more-container ${more === true ? 'moreCactive': ''} box-shadows`}>
                <div className={`more-child${more === true ? ' moreActive' : ''}`}  >
                  <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                    Date of be come member
                  </span>
                  <span style={{ fontSize: "1rem" }}>01/01/2001</span>
                </div>
                <div className={`more-child${more === true ? ' moreActive' : ''}`}>
                  <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    Date of expiry
                  </span>
                  <span style={{ fontSize: "1rem" }}>01/01/2001</span>
                </div>
                <div className={`more-child${more === true ? ' moreActive' : ''}`}>
                  <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    Location
                  </span>
                  <span style={{ fontSize: "1rem" }}>
                    123 Sukhumvit Road, Soi 11 Khlong Toei Nuea, Watthana
                    Bangkok 10110 Thailand 
                  </span>
                  <span style={{color:'blue', fontSize: "1rem", cursor:'pointer'}}> view Location </span>
                </div>
              </div>
            </div>
            <button className="edit box-shadows">Edit</button>
          </div>
          <div className="sec-container">
            <h3> FIRE EXTINGUISHER DATA </h3>
            <div className="dp-container box-shadows">
              <div className="dp-container-top">
                <div
                  className="add-type box-shadows"
                  onClick={() => {
                    if (permisstion === "SuperAdmin") {
                      setToggle(!toggle)
                      
                    } else {
                        
                        setOpen(!open)
                    }
                }}
                >
                  
                  <span className="bi bi-plus-circle" style={{marginRight:'1rem'}}></span>
                  <span style={{fontSize:'0.8rem'}}> {permisstion === 'SuperAdmin'? `Add` : 'Request'} </span>

                </div>
                <Input />
              </div>
              <div className="dp-container-bottom">
                <div className="dp-child">
                  <span>fire extinguisher Serial number</span>
                  <div
                    className="info"
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
                        backgroundColor: "red",
                        borderRadius: "100%",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="dp-child">
                  <span>fire extinguisher Serial number</span>
                  <div
                    className="info"
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
                        backgroundColor: "red",
                        borderRadius: "100%",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="dp-child">
                  <span>fire extinguisher Serial number</span>
                  <div
                    className="info"
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
                        backgroundColor: "red",
                        borderRadius: "100%",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="dp-child">
                  <span>fire extinguisher Serial number</span>
                  <div
                    className="info"
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
                        backgroundColor: "red",
                        borderRadius: "100%",
                      }}
                    ></div>
                  </div>
                </div>
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
                  <div className="dp-child">
                    <span>Serial number / location</span>
                    <div className="info">
                      <span style={{ fontSize: "0.8rem" }}>08/04/2004</span>
                    </div>
                  </div>
                  <div className="dp-child">
                    <span>Serial number / location</span>
                    <div className="info">
                      <span style={{ fontSize: "0.8rem" }}>08/04/2004</span>
                    </div>
                  </div>
                  <div className="dp-child">
                    <span>Serial number / location</span>
                    <div className="info">
                      <span style={{ fontSize: "0.8rem" }}>08/04/2004</span>
                    </div>
                  </div>
                  <div className="dp-child">
                    <span>Serial number / location</span>
                    <div className="info">
                      <span style={{ fontSize: "0.8rem" }}>08/04/2004</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-right">
          <div className="round-container">
            <div className="round-child">
              Check round circular <span style={{color:'white'}}>25/5/2005</span>
            </div>
            <div className="round-child">
              Next Check round Date <span style={{color:'white'}}>25/5/2005</span>
            </div>
            <div className="round-child">
              previous Check round Date <span style={{color:'white'}}>25/5/2005</span>
            </div>
          </div>

          <div className="sec-container" style={{ gridRow: "span 2" }}>
            <h3> Report list </h3>
            <div
              className="dp-container dp-report box-shadows"
            >
              <div className="dp-container-top">
                <Input />
              </div>
              <div className="dp-container-bottom">
                <div className="dp-child">
                  <span>Serial number</span>
                  <div
                    className="info"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <span style={{ fontSize: "0.8rem", marginRight: "1rem" }}>
                      01/01/2001
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
                          backgroundColor: "red",
                          borderRadius: "100%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="dp-child">
                  <span>Serial number</span>
                  <div
                    className="info"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <span style={{ fontSize: "0.8rem", marginRight: "1rem" }}>
                      01/01/2001
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
                          backgroundColor: "red",
                          borderRadius: "100%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="dp-child">
                  <span>Serial number</span>
                  <div
                    className="info"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <span style={{ fontSize: "0.8rem", marginRight: "1rem" }}>
                      01/01/2001
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
                          backgroundColor: "red",
                          borderRadius: "100%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="dp-child">
                  <span>Serial number</span>
                  <div
                    className="info"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <span style={{ fontSize: "0.8rem", marginRight: "1rem" }}>
                      01/01/2001
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
                          backgroundColor: "red",
                          borderRadius: "100%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="dp-child">
                  <span>Serial number</span>
                  <div
                    className="info"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <span style={{ fontSize: "0.8rem", marginRight: "1rem" }}>
                      01/01/2001
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
                          backgroundColor: "red",
                          borderRadius: "100%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaDashBord;
