import React from "react";
import "./keygen-sa.css";
import line from "../IMG/line_3536785.png";

const ClientForm = () => {
  return (
    <div className="form-card">
      <h2>Client</h2>
      <form>
        <label>
          First Name *
          <input type="text" className="c-input" required />
        </label>
        <label>
          Last Name *
          <input type="text" className="c-input" required />
        </label>
        <label>
          Name of Company *
          <input type="text" className="c-input" required />
        </label>
        <label>
          Choose location
          <input type="text" className="c1-input" placeholder="Enter lat"/>
          <input type="text" className="c1-input" placeholder="Enter lng"/>

        </label>
        <div className="radio-group">
          <p>Permission Type</p>
          <label>
            <input type="radio" name="permission" value="Super Guest" />
            Super Guest
          </label>
          <label>
            <input type="radio" name="permission" value="Sec Guest" />
            Sec Guest
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

export default ClientForm;
