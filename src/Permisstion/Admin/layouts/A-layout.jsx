import { useCombinedData } from "../../../DATA/CombinedDataContext";
import "./A-layout.css"
function Admin_pages() {
    const combinedData = useCombinedData();
    
    return ( <div>
                <div className="Sa-pages-container starter">
            <header className="header">
                <div className="logo"></div>
                <div className="user-sec">
                    <span className="bi bi-envelope-fill"></span>
                    <div className="user-container">
                        <label className="username">Admin_pages</label>
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
            <div className="container">
                    <p className="location">C.account management/ Some Client </p>
                    <div className="account-list">
                        {/* ตัวอย่างรายการบัญชี */}
                        <AccountItem companyName="Client Company Department" due/>
                        <AccountItem companyName="Client Company Department" due/>
                        <AccountItem companyName="Client Company Department" due/>

                    </div>
                </div>        
            </main>

            </main>
        </div>
    </div> );
}
function AccountItem({ companyName, due , status}) {
    return (
        <div className="account-item">
            <div className="company-details">
                <div className="company-logo"></div>
                <div className="company-name">{companyName}</div>
            </div>
            {/* เดะกลับมาแก้ทีหลัง VVV */}
            <div className="department-count"><span className="due" >&nbsp;&nbsp;Due</span> <br />01.01.2000 </div>
            <div className="status"><span className="sts">status</span><br />onsite <span className="O">O</span></div>
            <div className="more-info">click for more</div>
        </div>
    );
}
export default Admin_pages;