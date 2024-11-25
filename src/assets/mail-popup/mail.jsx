import React from "react";
import "./mail.css";
import cardData from "./data.js";

function MailPopup({ trigger, setTrigger }) {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <header className="header mail-header">
          <div className="logo"></div>
          <button className="close-btn bi bi-x-circle" onClick={() => setTrigger(false)}>
          </button>
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
          {/* <div className="card-container">
            {cardData.map((item) => (
              <div className="grid-container" key={item.id}>
                <div className="item1 circle-container">
                  <div className="circle"></div>
                </div>
                <div className="item2 card-text-role">
                  <p>
                    <b>{item.author} |</b>
                  </p>
                </div>
                <div className="item3 card-text-link">
                  <a href="#">{item.linkText}</a>
                </div>
              </div>
            ))}
          </div> */}
          <div className="card-mail">
            {cardData.map((item) => (
              <div className="mail-inner" key={item.id}>
                <div className="mail1 circle-left">
                  <div className="circle"></div>
                </div>
                <div className="mail2 text-role">
                  <p>
                    <b>{item.author} |</b>
                  </p>
                </div>
                <div className="mail3 text-link">
                  <a href="#">{item.linkText}</a>
                </div>
              </div>
            ))}
          </div>
          <button className="show-more-button">Show More</button>
        </div>
      </div>
    </div>
  ) : null; // Return null if not triggered
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
