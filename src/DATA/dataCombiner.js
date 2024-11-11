// dataCombiner.js
import { fetchCmData, fetchFireExtinguisherData } from './dataModule';

// ฟังก์ชันรวมข้อมูล CM และข้อมูลถังดับเพลิงตาม id ที่ตรงกัน
export function getCombinedData() {
    const CM = fetchCmData();
    const fireData = fetchFireExtinguisherData();

    // สร้าง lookup สำหรับข้อมูลถังดับเพลิงตาม id
    const fireDataById = fireData.reduce((acc, item) => {
        acc[item.id] = item.fire;
        return acc;
    }, {});

    // รวมข้อมูล
    const combinedData = CM.map(company => {
        return {
            CMname: company.CMname,
            DPCH: company.DPCH.map(department => {
                return {
                    ...department,
                    fire: fireDataById[department.id] || []  // แนบข้อมูลถังดับเพลิง หรือให้เป็น array ว่างถ้าไม่มีข้อมูลที่ตรงกัน
                };
            })
        };
    });

    return combinedData;
}
