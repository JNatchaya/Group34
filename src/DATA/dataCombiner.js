// dataCombiner.js
import { fetchCmData } from './companyData';
import { fetchFireExtinguisherData } from './fireExtinguisherData';

export function getCombinedData() {
    const CM = fetchCmData();
    const fireData = fetchFireExtinguisherData();

    // สร้าง lookup สำหรับข้อมูลถังดับเพลิงตาม DPName
    const fireDataByDPName = fireData.reduce((acc, item) => {
        acc[item.DPName] = item.fire;
        return acc;
    }, {});

    // รวมข้อมูล
    const combinedData = CM.map(company => {
        return {
            CMname: company.CMname,
            DPCH: company.DPCH.map(department => {
                return {
                    ...department,
                    fire: fireDataByDPName[department.DPName] || [] // แนบข้อมูลถังดับเพลิง หรือให้เป็น array ว่างถ้าไม่มีข้อมูลที่ตรงกัน
                };
            })
        };
    });

    return combinedData;
}
