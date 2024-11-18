import { useState } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import DepartmentMangement_tab from "../Department-management/Department-management";
import StaffManagement_tab from "../staff-management/staff-management";
import KeyGen from "../Key-gen/key-gen";

import "./Su-layout.css";
function Super_user_pages() {
    const [sutab, setSutab] = useState("Department_Management");

  return (
    <div>
      <div className="Sa-pages-container starter">
        <header className="header">
          <div className="logo"></div>
          <div className="user-sec">
            <span className="bi bi-envelope-fill"></span>
            <div className="user-container">
              <label className="username">Superuser</label>
              <div className="pofile-picture"></div>
            </div>
          </div>
        </header>
        <main className="body">
        <nav className="sidebar">
          <NavLink
            to="Department_Management"
            className={`Child ${sutab === "Department_Management" ? "active" : ""}`}
            onClick={() => setSutab("Department_Management")}
          >
            Department management<span className="bi bi-caret-right-fill"></span>
          </NavLink>
          <NavLink
            to="Staff_Management"
            className={`Child ${sutab === "Staff_Management" ? "active" : ""}`}
            onClick={() => setSutab("Staff_Management")}
          >
            Staff Management<span className="bi bi-caret-right-fill"></span>
          </NavLink>
          <NavLink
            to="key_generator"
            className={`Child ${sutab === "key_generator" ? "active" : ""}`}
            onClick={() => setSutab("key_generator")}
          >
            Key Generator <span className="bi bi-caret-right-fill"></span>
          </NavLink>
        </nav>
          <main className="box">
            {/* <div className="reportinfo-container">
              <div class="grid-container">
                <div className="item item1">
                    <div className="department-name">
                        <div className="logo1 item7 pofile-picture"></div>
                        <div className="name item8">Department name</div>
                        <div className="dropdown item9">Drop down</div>
                    </div>
                </div>
                <div className="item item2">
                    <div className="right-top">
                        <div className="item10">h</div>
                        <div className="item11">e</div>
                        <div className="item12">l</div>
                        <div className="item13">l</div>
                    </div>
                </div>
                <div className="item item3">3</div>
                <div className="item item4">4</div>
                <div className="item item5">5</div>
                <div className="item item6">6</div>
              </div>
            </div> */}
            <div className="container">
            <Routes>
              {/* Default redirect to "Assignment" */}
              <Route path="/" element={<Navigate to="Department_Management" />} />
              <Route path="Department_Management" element={<DepartmentMangement_tab />} />
              <Route path="Staff_Management" element={<StaffManagement_tab />} />
              <Route path="key_generator" element={<KeyGen />} />
            </Routes>
          </div>
          </main>
        </main>
      </div>
    </div>
  );
}
export default Super_user_pages;
