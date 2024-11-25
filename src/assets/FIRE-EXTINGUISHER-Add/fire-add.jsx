import { useState, useEffect } from "react";
import React from "react";
import { Stocks } from "../../DATA/Stock";
import "./fire-add.css";

function FireAdd({ setToggle }) {
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [value, setValue] = useState({
    ULRating: "",
    Capacity: "",
    SerialNumber: "",
  });
  const [size, setSize] = useState(false);

  const generateRandomSN = (length) => {
    const randomNum = Math.floor(Math.random() * Math.pow(10, length));
    return `SN${randomNum.toString().padStart(length, "0")}`;
  };

  const getType = (event) => {
    const data = event.currentTarget.getAttribute("data-set");
    setType(data);
  };

  const saveValue = (ULRating, Capacity) => {
    const SerialNumber = generateRandomSN(6);
    setValue({
      ULRating,
      Capacity,
      SerialNumber,
    });
  };

  useEffect(() => {}, [brand]);

  useEffect(() => {
    setBrand("");
    setSize("");
    setValue("");
  }, [type]);

  useEffect(() => {
    setSize("");
    setValue("");
  }, [brand]);

  const isConfirmDisabled =
    !value.ULRating || !value.Capacity || !value.SerialNumber;

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
                          setSize(
                            matchedBrand.property.ULRating,
                            matchedBrand.property.Capacity
                          );
                          saveValue(
                            matchedBrand.property.ULRating,
                            matchedBrand.property.Capacity
                          );
                        }}
                      >
                        {matchedBrand.property.ULRating} -{" "}
                        {matchedBrand.property.Capacity}
                      </div>
                    ))}
                </div>

                {size != "" && (
                  <div className="Serial-num-container">
                    Fire Extinguisher Serial Number
                    <input
                      className="Serial-value"
                      disabled
                      value={value.SerialNumber || generateRandomSN(6)}
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
                  // Optionally save the data when confirming
                  console.log("Final Values: ", value); // Final log of selected values
                }}
                disabled={isConfirmDisabled} // Disable the button if any of the values are empty
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
