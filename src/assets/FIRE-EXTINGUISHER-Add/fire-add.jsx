import { useState, useEffect } from "react";
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

  // Generate Random Serial Number
  const generateRandomSN = (length) => {
    const randomNum = Math.floor(Math.random() * Math.pow(10, length)); // Generate a random number with the specified length
    return `SN${randomNum.toString().padStart(length, "0")}`; // Add "SN" prefix and pad the number to the correct length
  };

  // Set the type based on selection
  const getType = (event) => {
    const data = event.currentTarget.getAttribute("data-set");
    setType(data);
  };

  // Save the selected values for ULRating, Capacity, and SerialNumber
  const saveValue = (ULRating, Capacity) => {
    const SerialNumber = generateRandomSN(6); // Generate the serial number
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

  // Disable confirm button if ULRating, Capacity, or SerialNumber are empty
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
            <div className="fireman-title">
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
            {/* <div className="fireman-infomation-container">
              <div className="picture"></div>
              <div className="property">
                <div style={{ fontSize: "1rem" }}>Property:</div>
                <div className="property-diss ">
                  <div className="property-child">
                    Class Rating
                    <span className="rate-container">
                      {Array.from({ length:child.property.ClassRating}, (_, index) => (
                      <div key={1} className="bi bi-star-fill"></div>

                       ))}
                    </span>
                  </div>
                  <div className="property-child">
                    Capacity <span>3L</span>
                  </div>
                  <div className="property-child">
                    Discharge <span>50 S</span>{" "}
                  </div>
                  <div className="property-child">
                    Operating Temperature Range <span>50 - 70 c</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="fireman-right">
            <div className="fireman-title">
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
