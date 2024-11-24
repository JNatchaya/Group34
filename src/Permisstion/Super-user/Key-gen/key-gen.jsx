import React, { useState } from 'react';
import line from "../../../IMG/line_3536785.png";
import "./key-gen.css";
function KeyGen() {
    const [image, setImage] = useState(null); // Single image state

    const handleAddImage = (event) => {
        const files = event.target.files;
        if (files && files[0]) {
            const fileUrl = URL.createObjectURL(files[0]);
            setImage(fileUrl);

            // Cleanup after upload
            event.target.value = null;
        }
    };

    return ( 
        <div className="report-container">
            <div className="container-top">
                <div className="Breadcrumb">
                    {/* Breadcrumb navigation (if needed) */}
                </div>
            </div>

            <div className="report-inner">
                <div className="report-title">
                Employee
                </div>
                <div className="report-serial-number">
                    <div className="serial-number-wrapper">
                        <label className="serial-label">First Name :</label>
                        <input className="serial-input" type="text" />
                    </div>
                </div>
                <div className="report-detail">
                    <div className="report-detail-wrapper">
                        <label className="detail-label">Last Name :</label>
                        <input className="detail-input-sup" type="text" />
                    </div>
                </div>
                <div className="report-detail">
                    <div className="report-detail-wrapper">
                        <label className="detail-label">Employee :</label>
                        <input className="detail-input-sup" type="text" />
                    </div>
                </div>
                            
        
                <div className="report-link">
          <button type="button" className="link-btn green"><img src={line} alt="Line" style={{width: "24px", height: "24px"}}/> Link to Line</button>
          
        </div>
      
                <div className="report-submit">
                    <button className="submit-btn">Generate</button>
                </div>
            </div>   
        </div>
    );
}

export default KeyGen;