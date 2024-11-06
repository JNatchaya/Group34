import { useEffect, useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login_Pages/Login";
import SuperAdmin_pages from "./Permisstion/Super-admin/layout/Sa-layout";
import Admin_pages from "./Permisstion/Admin/layouts/A-layout";
import Super_user_pages from "./Permisstion/Super-user/layout/Su-layout";
import Sup_user_pages from "./Permisstion/Sup-user/layout/Sup-layout";



import "./init.css"
function Init() {

    const [token, setToken] = useState('')

    useEffect((()=>{
        console.log(token)
    }), [token])
    return ( 


    <div className="init_container">
        

        {token === '' && <Login token={token} setToken={setToken} />}
        {token === 'SuperAdmin' && <SuperAdmin_pages />}
        {token === 'Admin' && <Admin_pages />}
        {token === 'SuperGuest' && <Super_user_pages />}
        {token === 'Mehanic' && <Sup_user_pages />}



    </div> 
    );
}

export default Init;