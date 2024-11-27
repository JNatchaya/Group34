const cardData = [
  {
    from: "Request",
    author: "From admin",
    detail: "click for more"
  },
  {
    from: "Report",
    serial: "",  // corrected typo from "serail" to "serial"
    image: "",
    author: "From admin",
    detail: "click for more"
  }
];

// Save to local storage
export const saveCardDataToLocalStorage = () => {
  localStorage.setItem('cardData', JSON.stringify(cardData));
  console.log('cardData saved to local storage:', cardData);
};

// Clear from local storage
export const clearCardDataFromLocalStorage = () => {
  localStorage.removeItem('cardData');
  console.log('cardData cleared from local storage');
};

export default cardData;
