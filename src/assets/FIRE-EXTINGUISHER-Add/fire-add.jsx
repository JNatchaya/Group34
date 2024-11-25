import { useState, useEffect } from "react";
import React from "react";
import { Stocks } from "../../DATA/Stock";
import { fire_extinguisher_data } from "../../DATA/fireExtinguisherData";
import "./fire-add.css";

function FireAdd({ setToggle, selectedDepartment }) {
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [floor, setFloor] = useState("");
  const [place, setPlace] = useState("");
  const [size, setSize] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  const generateRandomSN = (length) => {
    const randomNum = Math.floor(Math.random() * Math.pow(10, length));
    return `SN${randomNum.toString().padStart(length, "0")}`;
  };

  // Generate serial number when size changes
  useEffect(() => {
    if (size) {
      setSerialNumber(generateRandomSN(6));
    }
  }, [size]);

  const isConfirmDisabled = !type || !brand || !size || !floor || !place;

  const getType = (event) => {
    const data = event.currentTarget.getAttribute("data-set");
    setType(data);
  };

  const addValue = () => {
    const location = `${floor} - ${place}`;
    const newValue = {
      type,
      location,
      lastMaintenance: "",
      nextMaintenance: "",
      serialNumber: serialNumber,
      status: "Active",
    };

    const DeparmentData =
      fire_extinguisher_data.find(
        (item) => item.DPName === selectedDepartment.DPName
      ) || {};
      console.log("Added Fire Extinguisher Data: ", newValue);
      console.log("Department Data: ", DeparmentData);
      DeparmentData.fire.push(newValue);
      console.log("Department Data after: ", DeparmentData);
  };

  useEffect(() => {
    setBrand("");
    setSize("");
    setFloor("");
    setPlace("");
  }, [type]);

  useEffect(() => {
    setSize("");
  }, [brand]);

  return (
    <div className="fire-add-container">
      <div className="fire-inside">
        <div className="sidebar">
          <div className="input-container">
            <input
              placeholder="Search"
              type="text"
              name="text"
              className="input"
            />
          </div>
          <div className="c-container">
            {Stocks.map((item, index) => (
              <div
                className="Child"
                key={index}
                data-set={item.type}
                onClick={getType}
              >
                {item.type} <span className="bi bi-caret-right-fill"></span>
              </div>
            ))}
          </div>
        </div>

        <div className="fire-main">
          <div className="fireman-left">
            <div className="fireman-title" style={{ color: "var(--bold-org)" }}>
              {type === ""
                ? "Choose Type first"
                : "Choose Fire Extinguisher Brands"}
            </div>
            {type && (
              <div className="fireman-brand-container">
                {Stocks.filter((item) => item.type === type)
                  .flatMap((filteredItem) => filteredItem.typeChild)
                  .reduce((uniqueBrands, child) => {
                    if (
                      !uniqueBrands.some((brand) => brand.brand === child.brand)
                    ) {
                      uniqueBrands.push(child);
                    }
                    return uniqueBrands;
                  }, [])
                  .map((uniqueChild, index) => (
                    <img
                      src={uniqueChild.img}
                      key={index}
                      onClick={() => {
                        setBrand(uniqueChild.brand);
                      }}
                      className="brand"
                    />
                  ))}
              </div>
            )}

            {type && brand && size && (
              <div className="fireman-infomation-container">
                <div className="picture"></div>
                <div className="property">
                  {Stocks.filter((item) => item.type === type)
                    .flatMap((filteredItem) => filteredItem.typeChild)
                    .filter((item) => item.brand === brand)
                    .filter(
                      (item) =>
                        item.property.ULRating === size &&
                        item.property.Capacity
                    )
                    .map((item, index) => (
                      <React.Fragment key={index}>
                        <div
                          style={{ fontSize: "1rem", color: "var(--bold-org)" }}
                        >
                          Property:
                        </div>
                        <div className="property-diss">
                          <div className="property-child">
                            Class Rating
                            <span className="rate-container">
                              {Array.from(
                                { length: item.property.ClassRating },
                                (_, index) => (
                                  <div
                                    key={index}
                                    className="bi bi-star-fill"
                                  ></div>
                                )
                              )}
                            </span>
                          </div>
                          <div className="property-child">
                            ULrating <span>{item.property.ULRating}</span>
                          </div>
                          <div className="property-child">
                            Capacity <span>{item.property.Capacity}</span>
                          </div>
                          <div className="property-child">
                            Discharge <span>{item.property.Discharge} S</span>
                          </div>
                          <div className="property-child">
                            Operating Temperature Range{" "}
                            <span>
                              {item.property.OperatingTemperatureRange}
                            </span>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                </div>
              </div>
            )}
          </div>

          <div className="fireman-right">
            <div className="fireman-title" style={{ color: "var(--bold-org)" }}>
              {type && !brand && "Choose Brand first"}
              {type && brand && "Choose Fire Extinguisher Sizes"}
            </div>

            {type && brand && (
              <>
                <div className="size">
                  {Stocks.filter((item) => item.type === type)
                    .flatMap((filteredItem) => filteredItem.typeChild)
                    .filter((item) => item.brand === brand)
                    .map((matchedBrand, index) => (
                      <div
                        key={index}
                        className="size-child"
                        onClick={() => {
                          setSize(matchedBrand.property.ULRating);
                        }}
                      >
                        {matchedBrand.property.ULRating} -{" "}
                        {matchedBrand.property.Capacity}
                      </div>
                    ))}
                </div>

                {size && (
                  <div className="Serial-num-container">
                    Fire Extinguisher Serial Number
                    <input
                      className="Serial-value"
                      disabled
                      value={serialNumber}
                    />
                    Location
                    <input
                      type="number"
                      className="Serial-value"
                      placeholder="Floor"
                      value={floor}
                      onChange={(e) => setFloor(e.target.value)}
                    />
                    <input
                      style={{ marginTop: "1rem" }}
                      type="text"
                      className="Serial-value"
                      placeholder="Room or Place"
                      value={place}
                      onChange={(e) => setPlace(e.target.value)}
                    />
                  </div>
                )}
              </>
            )}

            <div className="button-container">
              <button
                className="btn btn-danger"
                onClick={() => {
                  setToggle(false);
                }}
              >
                Cancel
              </button>
              <button
                className="btn btn-success"
                onClick={() => {
                  setToggle(false);
                  addValue();
                }}
                disabled={isConfirmDisabled}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FireAdd;
