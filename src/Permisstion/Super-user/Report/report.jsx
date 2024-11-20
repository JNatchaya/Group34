import './report.css';

function Report() {
    return ( 
        <div className="report-container">
            <div className="container-top">
                <div className="Breadcrumb">
                    {/* Breadcrumb navigation (if needed) */}
                </div>
            </div>

            <div className="report-inner">
                <div className="report-title">
                    <b>Report Fire Extinguisher</b>
                </div>
                <div className="report-serial-number">
                    <div className="serial-number-wrapper">
                        <label className="serial-label">Serial Number :</label>
                        <input className="serial-input" type="text" />
                    </div>
                </div>
                <div className="report-detail">
                    <div className="report-detail-wrapper">
                        <label className="detail-label">Report Detail :</label>
                        <input className="detail-input" type="text" />
                    </div>
                </div>
                <div className="report-image">
                    <div className="add-image">Add Image</div>
                    <button className="upload-btn">
                        <div className="upload-icon bi bi-cloud-upload"></div>
                        <div className="upload-text">Upload file</div>
                    </button>
                </div>
                <div className="report-submit">
                    <button className="submit-btn">Submit</button>
                </div>
            </div>   
        </div>
    );
}

export default Report;

