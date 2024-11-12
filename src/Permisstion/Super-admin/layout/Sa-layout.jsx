

import "./Sa-layout.css"
import { useCombinedData } from "../../../DATA/CombinedDataContext";
function SuperAdmin_pages() {
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
                
                {/* แสดงข้อมูลจาก combinedData vvvv ***---อันนี้ทดสอบนะ ลบได้---***  vvvv */}

                {/* <main className="box">
                    {combinedData.map((company, index) => (
                        <div key={index}>
                            <h3>{company.CMname}</h3>
                            {company.DPCH.map((department) => (
                                <div key={department.id}>
                                    <p>Department: {department.DPName}</p>
                                    <ul>
                                        {department.fire.map((extinguisher) => (
                                            <li key={extinguisher.fireID}>
                                                ID: {extinguisher.fireID},
                                                Type: {extinguisher.type},
                                                Location: {extinguisher.location},
                                                Last Maintenance: {extinguisher.lastMaintenance},
                                                Next Maintenance: {extinguisher.nextMaintenance},
                                                Serial Number: {extinguisher.serialNumber}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                </main> */}
            </main>
        </div>
    );
}

export default SuperAdmin_pages;