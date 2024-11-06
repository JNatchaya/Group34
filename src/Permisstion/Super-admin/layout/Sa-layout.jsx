

import "./Sa-layout.css"
function SuperAdmin_pages() {
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
            <main className="box"></main>
            </main>
        </div>
     );
}

export default SuperAdmin_pages;