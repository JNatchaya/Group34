import React from "react";
import "./mail.css";
import cardData from "./data.js";

function MailPopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </div>
        {props.children}
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
        <body className="mail-container">
          <div className="card-container">
            {cardData.map((item, index) => (
              <div class="grid-container" key={item.id}>
                <div class="item1 circle-container">
                  <div className="circle"></div>
                </div>
                <div class="item2 card-text-role">
                  <p>{item.author} |</p>
                </div>
                <div class="item3 card-text-link">
                  <a href="#">{item.linkText}</a>
                </div>
              </div>
            ))}
          </div>
        </body>
      </div>
    </div>
  ) : (
    ""
  );
}

export default MailPopup;
