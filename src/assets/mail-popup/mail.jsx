import React from "react";
import "./mail.css";
import cardData from "./data.js";

function MailPopup({ trigger, setTrigger }) {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <header className="header mail-header">
          <div className="logo"></div>
          <button
            className="close-btn-1 bi bi-x-circle"
            onClick={() => setTrigger(false)}
          ></button>
        </header>
        <nav className="mail-nav">
          <span>
            <a href="#" className="all-mail">
              All
            </a>
          </span>
          <span>
            <a href="#" className="recent-mail">
              Recent
            </a>
          </span>
        </nav>

        <div className="mail-container">
          {cardData.map((item, index) => (
            <div key={index} className="card-mail">
              <div className="img-mail-container">
                <div className="circle"></div>
              </div>
              <div className="detail-mail-container">
                <div className="detail-mail-header">
                  {item.from === "Report"
                    ? "Admin | "
                    : "Client | "}
                </div>
                <div className="detail-mail-body">
                  <span>{item.detail}</span>
                  {item.image && (
                    <div className="imag">
                      <img src={item.image} alt="Attached" />
                    </div>
                  )}
                  <span className="link">More</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="show-more-button">Show More</button>
      </div>
    </div>
  ) : null;
}

export default MailPopup;

// .popup-inner .close-btn {
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   cursor: pointer;
//   font-size: 1.2rem;
//   color: #333;
//   border: none;
//   background: none;
// }
