import { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login_Pages/Login";
import SuperAdmin_pages from "./Permisstion/Super-admin/layout/Sa-layout";
import Admin_pages from "./Permisstion/Admin/layouts/A-layout";
import Super_user_pages from "./Permisstion/Super-user/layout/Su-layout";
import Sup_user_pages from "./Permisstion/Sup-user/layout/Sup-layout";
import Mehanic_pages from "./Permisstion/Mechanic/layout/M-layout";
import "./init.css";

function Init() {
  const storedToken = localStorage.getItem('token');
  const [token, setToken] = useState(storedToken || '');  
  localStorage.setItem('token', 'SuperUser');
 
  // clearToken()
 
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token); 
    }
  }, [token]);

  useEffect(() => {
    
    if (token === 'SuperAdmin') {
      window.location.href = "#/SuperAdmin";
    } else if (token === 'Admin') {
      window.location.href = "#/Admin";
    } else if (token === 'SuperUser') {
      window.location.href = "#/SuperUser";
    } else if (token === 'SupUser') {
      window.location.href = "#/SupUser";
    } else if (token === 'Mehanic') {
      window.location.href = "#/Mehanic";
    }
  }, [token]);  // Re-run effect whenever token changes

  return (
    <div className="init_container">
      {token === '' ? (
        <Login token={token} setToken={setToken} />
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to={token === 'SuperAdmin' ? "/SuperAdmin" : token === 'Admin' ? "/Admin" : token === 'SuperUser' ? "/SuperUser" : token === 'SupUser' ? "/SupUser" : token === 'Mehanic' ? "/Mehanic" : "/"} />} />
          
          {token === 'SuperAdmin' && <Route path="/SuperAdmin/*" element={<SuperAdmin_pages setToken={setToken}/>} />}
          {token === 'Admin' && <Route path="/Admin/*" element={<Admin_pages setToken={setToken}/>} />}
          {token === 'SuperUser' && <Route path="/SuperUser/*" element={<Super_user_pages setToken={setToken}/>} />}
          {token === 'SupUser' && <Route path="/SupUser/*" element={<Sup_user_pages setToken={setToken}/>} />}
          {token === 'Mehanic' && <Route path="/Mehanic" element={<Mehanic_pages setToken={setToken}/>} />}
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </div>
  );
}
// utils/localStorageHelper.js
export const setToken = (token) => localStorage.setItem('token', token);
export const clearToken = () => localStorage.removeItem('token');
export const clearAllStorage = () => localStorage.clear();

export default Init;

