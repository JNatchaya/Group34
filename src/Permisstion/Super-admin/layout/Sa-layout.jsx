
import { Link, Outlet } from "react-router-dom";
import "./Sa-layout.css"
import { useCombinedData } from "../../../DATA/CombinedDataContext";
import MailPopup from "../../../mail-popup/mail";
import { useState } from "react";
function SuperAdmin_pages() {
    const combinedData = useCombinedData(); // ดึงข้อมูล combinedData จาก context
    const [buttonMailPopup, setButtonMailPopup] = useState(false);
    return ( 
        <div className="Sa-pages-container starter">
            <header className="header">
                <div className="logo"></div>
                <div className="user-sec">
                <button onClick={() => setButtonMailPopup(true)}><span className="bi bi-envelope-fill"></span></button>
          <MailPopup trigger={buttonMailPopup} setTrigger={setButtonMailPopup}>
            <h3>hi</h3>
          </MailPopup>
                    <div className="user-container">
                        <label className="username">Superadmin</label>
                        <div className="pofile-picture"></div>
                    </div>
                </div>
            </header>
            <main className="body">
                <div className="sidebar">
                    <div className="Child active">C.account management <span className="bi bi-caret-right-fill"></span>  </div>
                    <Link to="StaffManagement" className="Child"> 
            Staff Management <span className="bi bi-caret-right-fill"></span>
          </Link>
                    <div className="Child">Stock <span className="bi bi-caret-right-fill"></span></div>
                    <div className="Child">Key Generator <span className="bi bi-caret-right-fill"></span></div>
                    <div className="Child">MAP<span className="bi bi-caret-right-fill"></span></div>
                </div>
                    <div className="container">
                    <p className="location">C.account management/ </p>
                    <div className="account-list">
                        {/* ตัวอย่างรายการบัญชี */}
                        <AccountItem companyName="Client Company name" departmentCount={5} />
                        <AccountItem companyName="Client Company name" departmentCount={2} />
                        <AccountItem companyName="Client Company name" departmentCount={3} />
                        <AccountItem companyName="Client Company name" departmentCount={5} />
                        <AccountItem companyName="Client Company name" departmentCount={7} />
                    </div>
                    <button className="add-company-button">Add Company</button>
                </div>
                
            </main>
        </div>
    );
}
// ส่วน Component สำหรับรายการบัญชี
function AccountItem({ companyName, departmentCount }) {
    return (
        <div className="account-item">
            <div className="company-details">
                <div className="company-logo"></div>
                <div className="company-name">{companyName}</div>
            </div>
            <div className="department-count">Number of Department ({departmentCount})</div>
            <div className="more-info">click for more</div>
        </div>
    );
}

export default SuperAdmin_pages;