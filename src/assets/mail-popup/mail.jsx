import React from "react";
import "./mail.css";
import cardData from "./data.js";

function MailPopup({ trigger, setTrigger }) {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn bi bi-x-circle" onClick={() => setTrigger(false)}>
        </button>
        <header className="header">
          <div className="logo"></div>
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
          <div className="card-container">
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
          </div>
          <button className="show-more-button">Show More</button>
        </div>
      </div>
    </div>
  ) : null; // Return null if not triggered
}

export default MailPopup;
