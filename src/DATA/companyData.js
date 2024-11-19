// companyData.js

export const CM = [
    {
        "CMname": "Company_1",
        "DPCH": [
            {
                "DPName": "C1_Department_01",
            },
            {
                "DPName": "C1_Department_02",
            }
        ]
    },
    {
        "CMname": "Company_2",
        "DPCH": [
            {
                "DPName": "C2_Department_01",
            },
            {
                "DPName": "C2_Department_02",
            }
        ]
    },
    // ข้อมูลบริษัทอื่นๆ
];

export function fetchCmData() {
    return CM;
}
