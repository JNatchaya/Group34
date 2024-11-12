import { useCombinedData } from "../../../DATA/CombinedDataContext";
function Admin_pages() {
    const combinedData = useCombinedData();
    
    return ( <div>
                <div className="Sa-pages-container starter">
            <header className="header">
                <div className="logo"></div>
                <div className="user-sec">
                    <span className="bi bi-envelope-fill"></span>
                    <div className="user-container">
                        <label className="username">SuperAdmin_pages</label>
                        <div className="pofile-picture"></div>
                    </div>
                </div>
            </header>
            <main className="body">
            <nev className="sidebar">
                <div className="Child active">Assigns <span className="bi bi-caret-right-fill"></span>  </div>
                <div className="Child">User<span  className="bi bi-caret-right-fill"></span></div>
            </nev>
            <main className="box">

                {/* ***--- vvvv ทดสอบ ลบได้ๆ vvvv ---*** */}

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
            </main>
        </div>
    </div> );
}

export default Admin_pages;