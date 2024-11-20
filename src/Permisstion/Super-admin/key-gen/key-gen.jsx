import React from 'react';
import EmployeeForm from "../../../components/keygencom-sa-em";
import ClientForm from "../../../components/keygencom-sa-cl";
import "./key-gen.css";
function KeyGen() {
    return ( 
        <div>
            <div className="forms-container">
              <EmployeeForm />
              <ClientForm />    
            </div>
            
        </div>
     );
}

export default KeyGen;