const CM = [
    {
        "CMname": "Company_1",
        "DPCH": [
            {
                "DPName": "C1_Department_01",
                "id": "1",
            },
            {
                "DPName": "C1_Department_02",
                "id": "2",
            }
        ]
    },
    {
        "CMname": "Company_2",
        "DPCH": [
            {
                "DPName": "C2_Department_01",
                "id": "3",
            },
            {
                "DPName": "C2_Department_02",
                "id": "4",
            }
        ]
    },
    {
        "CMname": "Company_3",
        "DPCH": [
            {
                "DPName": "C3_Department_01",
                "id": "5",
            },
            {
                "DPName": "C3_Department_02",
                "id": "6",
            }
        ]
    },
    {
        "CMname": "Company_4",
        "DPCH": [
            {
                "DPName": "C4_Department_01",
                "id": "7",
            },
            {
                "DPName": "C4_Department_02",
                "id": "8",
            }
        ]
    }
];

export function fetchCmData() {
    return CM;
}
