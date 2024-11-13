import { useEffect, useState } from "react";
import { HashRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Login from "./Login_Pages/Login";
import SuperAdmin_pages from "./Permisstion/Super-admin/layout/Sa-layout";
import StaffManagement from "./Permisstion/Super-admin/layout/staffmanage/staffmanage";
import Admin_pages from "./Permisstion/Admin/layouts/A-layout";
import Super_user_pages from "./Permisstion/Super-user/layout/Su-layout";
import Sup_user_pages from "./Permisstion/Sup-user/layout/Sup-layout";
import Mehanic_pages from "./Permisstion/Mechanic/layout/M-layout";

import { getCombinedData } from './DATA/dataCombiner';

import "./init.css";

function Init() {
  const [token, setToken] = useState('SuperAdmin');
  const [combinedData, setCombinedData] = useState([]); // State for combined data
  const navigate = useNavigate();  // Hook to navigate programmatically

  useEffect(() => {
    // Fetch combined data and set it to the state
    setCombinedData(getCombinedData());
  }, []);

  useEffect(() => {
    console.log("Combined Data:", combinedData);
  }, [combinedData]);

  useEffect(() => {
    console.log(token);
    // Navigate to the corresponding page based on token
    if (token === '') {
      navigate('/');
    } else if (token === 'SuperAdmin') {
      navigate('/SuperAdmin');
    } else if (token === 'Admin') {
      navigate('/Admin');
    } else if (token === 'SuperUser') {
      navigate('/SuperUser');
    } else if (token === 'SupUser') {
      navigate('/SupUser');
    } else if (token === 'Mehanic') {
      navigate('/Mehanic');
    }
  }, [token, navigate]);

  return (
    <div className="init_container">
      {token === '' ? (
        <Login token={token} setToken={setToken} />
      ) : (
        <Routes>

          {token === "SuperAdmin" && (
            <Route path="/SuperAdmin" element={<SuperAdmin_pages />}>
              <Route path="StaffManagement" element={<StaffManagement />} />
            </Route>
          )}

          {token === 'Admin' && <Route path="/Admin" element={<Admin_pages />} />}


          {token === 'Mehanic' && <Route path="/Mehanic" element={<Mehanic_pages />} />}
            
          {token === 'SuperUser' && <Route path="/SuperUser" element={<Super_user_pages />} />}
            
          {token === 'SupUser' && <Route path="/SupUser" element={<Sup_user_pages />} />}
            
            
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </div>
  );
}

export default Init;

// Ensure that the HashRouter is placed at a higher level in the component tree (such as in the App component).