import React from "react";
import "./userprofile.css"; 
import assignmentData from "./data.js"; 

function UserProfile() {
  return (
    <div className="staffmanage-container">
      <div className="information">
        <div className="user-info">
          <div className="profile-photo">
            <img src="" alt="userPhoto" />
          </div>
          <div className="user-details">
            <div className="user-name">John Doo</div>
            <div className="role">Mechanic</div>
            <p className="contact-info">johndoo@mail.com</p>
            <p className="contact-info">000 2222 4444</p>
          </div>
        </div>
        <div className="user-description-container">
          <div className="user-description-header">User Information</div>
          <p className="user-description-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            since the 1500s...
          </p>
        </div>
      </div>
      <div>
        <button className="edit-button">Edit</button>
      </div>
      <div className="behavior-container">
        <div className="behavior-header">Behavior Score</div>
        <div className="behavior-body"></div>
      </div>

      <div className="assigntment-footprint-container">
        <div className="assigntment-footprint-header">Assignment Footprint</div>
        <div className="assigntment-footprint-body">
        <div className="assingment-container">
      {assignmentData.map((item) => (
        <div className="assingment" key={item.id}>
          <div className="assingment-left">
            <p>{item.author} |</p>
          </div>
          <div className="assingment-right">
          <a href="#">{item.linkText}</a>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
