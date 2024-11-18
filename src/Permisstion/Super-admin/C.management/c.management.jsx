

import './c.management.css'
import { useCombinedData } from "../../../DATA/CombinedDataContext";
function C_management_tab() {
    const combinedData = useCombinedData(); // ดึงข้อมูล combinedData จาก context

    return ( 
        <div className="Sa-pages-container starter">
            <header className="header">
                <div className="logo"></div>
                <div className="user-sec">
                    <span className="bi bi-envelope-fill"></span>
                    <div className="user-container">
                        <label className="username">Superadmin</label>
                        <div className="pofile-picture"></div>
                    </div>
                </div>
            </header>
            <main className="body">
                <div className="sidebar">
                    <div className="Child active">C.account management <span className="bi bi-caret-right-fill"></span>  </div>
                    <div className="Child">Staff Management <span  className="bi bi-caret-right-fill"></span></div>
                    <div className="Child">Stock <span className="bi bi-caret-right-fill"></span></div>
                    <div className="Child">Key Generator <span className="bi bi-caret-right-fill"></span></div>
                    <div className="Child">MAP<span className="bi bi-caret-right-fill"></span></div>
                </div>
                    <div className="container">
                    <p className="location">C.account management/ Some Client </p>
                    <div className="account-list">
                        {/* ตัวอย่างรายการบัญชี */}
                        <AccountItem DepartmentName="Client Company Department" Number of fire extinguishers={12} />
                        <AccountItem DepartmentName="Client Company Department" Number of fire extinguishers={14} />
                        <AccountItem DepartmentName="Client Company Department" Number of fire extinguishers={10} />
                        <AccountItem DepartmentName="Client Company Department" Number of fire extinguishers={14} />
                        <AccountItem DepartmentName="Client Company Department" Number of fire extinguishers={16} />
                    </div>
                    <button className="add-company-button">Add Department</button>
                </div>
                
            </main>
        </div>
    );
}
// ส่วน Component สำหรับรายการบัญชี
function AccountItem({ DepartmentName, Number_of_fire_extinguishers }) {
    return (
        <div className="account-item">
            <div className="company-details">
                <div className="company-logo"></div>
                <div className="department-name">{DepartmentName}</div>
            </div>
            <div className="number-of-fire-extinguishers">Number of fire extinguishers ({Number_of_fire_extinguishers})</div>
            <div className="more-info">click for more</div>
        </div>
    );
}

export default C_management_tab;