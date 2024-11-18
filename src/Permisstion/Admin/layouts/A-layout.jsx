import { useCombinedData } from "../../../DATA/CombinedDataContext";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { useState } from "react";

import Assignment from "../Assignment/assignment";
import User from "../User/user";
import "./A-layout.css";

function Admin_pages() {
  const [atab, setAtab] = useState("Assignment");

  return (
    <div className="Sa-pages-container starter">
      <header className="header">
        <div className="logo"></div>
        <div className="user-sec">
          <span className="bi bi-envelope-fill"></span>
          <div className="user-container">
            <label className="username">Admin Pages</label>
            <div className="pofile-picture"></div>
          </div>
        </div>
      </header>
      <main className="body">
        <nav className="sidebar"> {/* Changed 'nev' to 'nav' */}
          <NavLink
            to="Assignment"
            className={`Child ${atab === "Assignment" ? "active" : ""}`}
            onClick={() => setAtab("Assignment")}
          >
            Assignment <span className="bi bi-caret-right-fill"></span>
          </NavLink>
          <NavLink
            to="User"
            className={`Child ${atab === "User" ? "active" : ""}`}
            onClick={() => setAtab("User")}
          >
            User <span className="bi bi-caret-right-fill"></span>
          </NavLink>
        </nav>

        <main className="box">
          <div className="container">
            <Routes>
              {/* Default redirect to "Assignment" */}
              <Route path="/" element={<Navigate to="Assignment" />} />
              <Route path="Assignment" element={<Assignment />} />
              <Route path="User" element={<User />} />
            </Routes>
          </div>
        </main>
      </main>
    </div>
  );
}

export default Admin_pages;

