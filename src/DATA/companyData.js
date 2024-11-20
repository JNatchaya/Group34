// companyData.js

export const CM = [
    {
        "CMname": "Company_1",
        "DPCH": [
            {
                "DPName": "C1_Department_01",
                "DPLocation": "",
            },
            {
                "DPName": "C1_Department_02",
                "DPLocation": "",
            }
        ]
    },
    {
        "CMname": "Company_2",
        "DPCH": [
            {
                "DPName": "C2_Department_01",
                "DPLocation": "",
            },
            {
                "DPName": "C2_Department_02",
                "DPLocation": "",
            }
        ]
    },
];

export function fetchCmData() {
    return CM;
}
