import React, { useRef, useState } from "react";
import { Stocks } from "../../../DATA/Stock.js";
import "./stock.css";

function StockManage() {
  const containerRef = useRef(null);
  const [tapState, setTapState] = useState("type_tap");
  const [type, setType] = useState("");
  const [list, setList] = useState("");
  const [detail, setDetail] = useState("");

  const handleScroll = (event) => {
    event.preventDefault();
    containerRef.current.scrollLeft += event.deltaY;
  };

  const typeClick = (event) => {
    const type = event.currentTarget.getAttribute("data-type");
    setTapState("type_child");
    setType(type);
    setList(""); 
    setDetail(""); 
  };

  const listlick = (event) => {
    const listType = event.currentTarget.getAttribute("data-type");
    setList(listType);
    setDetail("toggle");
  };

  return (
    <div className="stock-container">
      <div className="container-top">
        <div className="Breadcrumb">
            <span className="bi bi-folder-fill"></span>
            <span className="BreadCrumb-child" onClick={() => setTapState('type_tap')}>Stock /</span>
            {tapState === "type_child" && (
                <span className="BreadCrumb-child" onClick={()=>{setList(''); setDetail('')}}>{type} Type /</span>
            )}
            

        </div>
      </div>

      <div className="stock-sup-container">
        {tapState === "type_tap" && (
          <div
            className="item-container"
            onWheel={handleScroll}
            ref={containerRef}
          >
            {Stocks.map((item, index) => (
              <div
                key={index}
                className="item-type"
                data-type={item.type}
                onClick={typeClick}
              >
                <div className="item-img">
                  <img src={item.img} alt={`${item.type} extinguisher`} />
                </div>
                <div className="item-diss">{`${item.type} : Type`}</div>
              </div>
            ))}
          </div>
        )}

        {tapState === "type_child" && (
          <div className="inside-type-container">
            <div className="detail-side">
                {detail === '' && (
                    <h1>Choose the Model</h1>
                )}
              {detail === "toggle" &&
                Stocks.filter((item) => item.type === type)
                  .flatMap((filteredItem) =>
                    filteredItem.typeChild.filter(
                      (child) => child.model === list
                    )
                  )
                  .map((child) => (
                    <div className="detail-side-container">
                      <aside className="detail-img"> <img src={child.img} alt="" /></aside>
                      <aside className="detail-diss">
                        <div className="diss">
                          <h2>{child.model}</h2>
                          <div className="diss-bottom">
                            <h4>Publisher: {child.brand}</h4>
                            <h4>Type of: {child.type}</h4>
                          </div>
                        </div>

                        <div className="property">
                          <h2>Property:</h2>
                          <div className="property-diss">
                            <div className="property-child">
                              Class Rating
                              <span className="rate-container">
                                {Array.from({ length:child.property.ClassRating}, (_, index) => (
                                  <div key={index} className="rate"></div>
                                ))}
                              </span>
                            </div>
                            <div className="property-child">
                              Capacity <span>{child.property.Capacity}</span>
                            </div>
                            <div className="property-child">
                              Discharge <span>{child.property.Discharge} S</span>{" "}
                            </div>
                            <div className="property-child">
                              Operating Temperature Range <span>{child.property.OperatingTemperatureRange}</span>
                            </div>
                          </div>
                        </div>
                      </aside>
                    </div>
                  ))}
            </div>

            <div className="list-side">
              {Stocks.filter((item) => item.type === type).map((filteredItem) =>
                filteredItem.typeChild.map((child, index) => (
                  <div
                    className="list-side-child"
                    key={index}
                    data-type={child.model}
                    onClick={listlick}
                  >
                    <div className="list-head">
                      <div className="list-child-img"></div>
                      {child.model}
                    </div>

                    <div className="list-child-status">
                      <span>Status</span>
                      <div
                        className="status-ball"
                        style={{
                          backgroundColor:
                            child.property.stockRemain === 0
                              ? "black"
                              : child.property.stockRemain < 50
                              ? "red"
                              : child.property.stockRemain < 150
                              ? "yellow"
                              : "green",
                        }}
                      ></div>
                    </div>
                  </div>
                ))
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StockManage;
