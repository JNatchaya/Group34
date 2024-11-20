import React from "react";
import "./keygen-sa.css";

const ClientForm = () => {
  return (
    <div className="form-card">
      <h2>Client</h2>
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
          Name of Company *
          <input type="text" required />
        </label>
        <label>
          Choose location
          <input type="text" />
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
          <button type="button" className="link-btn green">Link to Line</button>
          <button type="button" className="link-btn orange">Link to Something</button>
        </div>
        <button type="submit" className="generate-btn">Generate</button>
      </form>
    </div>
  );
};

export default ClientForm;
