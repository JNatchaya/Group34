import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCombinedData } from './dataCombiner';

// สร้าง context
const CombinedDataContext = createContext();

// สร้าง provider component
export function CombinedDataProvider({ children }) {
    const [combinedData, setCombinedData] = useState([]);

    useEffect(() => {
        // เรียกข้อมูล combined data เมื่อ component ถูก mount
        setCombinedData(getCombinedData());
    }, []);

    return (
        <CombinedDataContext.Provider value={combinedData}>
            {children}
        </CombinedDataContext.Provider>
    );
}

// สร้าง custom hook เพื่อใช้ combined data context
export function useCombinedData() {
    return useContext(CombinedDataContext);
}