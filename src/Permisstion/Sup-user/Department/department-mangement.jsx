import React from "react";
import { useCombinedData } from "../../../DATA/CombinedDataContext";
import SaDashBord from "../../Super-admin/Sa-Dashbord/sa-dashbord";

function Department_Management() {
    const combinedData = useCombinedData();
    
    const firstDepartment =
        combinedData[0]?.DPCH?.length > 0 ? combinedData[0].DPCH[0] : null;

  return (
    <div className="c-management-container">
      {firstDepartment ? (
        <div className="company-container">
          <SaDashBord
            selectedDepartment={firstDepartment}
            permiss={""}
          />
        </div>
      ) : (
        <p>No departments found.</p>
      )}
    </div>
  );
}

export default Department_Management;