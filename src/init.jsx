import { useEffect, useState } from "react";
import { HashRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Login from "./Login_Pages/Login";
import SuperAdmin_pages from "./Permisstion/Super-admin/layout/Sa-layout";
import Admin_pages from "./Permisstion/Admin/layouts/A-layout";
import Super_user_pages from "./Permisstion/Super-user/layout/Su-layout";
import Sup_user_pages from "./Permisstion/Sup-user/layout/Sup-layout";

import { fetchCmData } from "./DATA/Cm_data";
import { fetchFireExtinguisherData } from "./DATA/fire_extinguisher_data";

import "./init.css";

function Init() {
  const [token, setToken] = useState('');
  const [cmData, setCmData] = useState([]); // Declare state for cmData
  const [fireExtinguisherData, setFireExtinguisherData] = useState([]); // Declare state for fireExtinguisherData
  const navigate = useNavigate();  // Hook to navigate programmatically

  useEffect(() => {
    // Fetch data and set it to the respective state variables
    setCmData(fetchCmData());
    setFireExtinguisherData(fetchFireExtinguisherData());
  }, []);

  useEffect(() => {
    console.log("CM Data:", cmData);
    console.log("Fire Extinguisher Data:", fireExtinguisherData);
  }, [cmData, fireExtinguisherData]);

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

          {token === 'SuperAdmin' && <Route path="/SuperAdmin" element={<SuperAdmin_pages />} />}

          {token === 'Admin' && <Route path="/Admin" element={<Admin_pages />} />}


          {token === 'Mehanic' && <Route path="/Mehanic" element={<></>} />}
            
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