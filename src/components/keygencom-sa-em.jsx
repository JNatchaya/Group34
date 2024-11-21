import React from "react";
import "./keygen-sa.css";
import line from "../IMG/line_3536785.png";

const EmployeeForm = () => {
  return (
    <div className="form-card">
      <h2>Employee</h2>
      <form>
        <label>
          First Name *
          <input type="text" required />
        </label>
        <label>
          Last Name *
          <input type="text" required />
        </label>
        <label>
          Employee *
          <input type="text" required />
        </label>
        <div className="radio-group">
          <p>Permission Type</p>
          <label>
            <input type="radio" name="permission" value="Admin" className="HHH"/>
            Admin
          </label>
          <label>
            <input type="radio" name="permission" value="User" className="HHH"/>
            User
          </label>
        </div>
        <div className="buttons">
        <button type="button" className="link-btn green"><img src={line} alt="Line" style={{width: "24px", height: "24px"}}/> Link to Line</button>
        </div>
        <button type="submit" className="generate-btn">Generate</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
