// dataModule.js

export const CM = [
    {
        "CMname": "Company_1",
        "DPCH": [
            {
                "DPName": "C1_Department_01",
                "id": "1"
            },
            {
                "DPName": "C1_Department_02",
                "id": "2"
            }
        ]
    },
    {
        "CMname": "Company_2",
        "DPCH": [
            {
                "DPName": "C2_Department_01",
                "id": "3"
            },
            {
                "DPName": "C2_Department_02",
                "id": "4"
            }
        ]
    },
    // ข้อมูลบริษัทอื่นๆ
];

export const fire_extinguisher_data = [
    {
        "id": 1,
        "fire": [
            {
                "fireID": "001",
                "type": "CO2",
                "location": "Floor 1 - Aisle 5",
                "lastMaintenance": "2024-10-01",
                "nextMaintenance": "2025-01-01",
                "serialNumber": "SN123456"
            },
            {
                "fireID": "002",
                "type": "Dry Chemical",
                "location": "Floor 2 - Room 205",
                "lastMaintenance": "2024-09-15",
                "nextMaintenance": "2024-12-15",
                "serialNumber": "SN789012"
            }
        ]
    },
    {
        "id": 2,
        "fire": [
            {
                "fireID": "003",
                "type": "Foam",
                "location": "Floor 3 - Near Elevator",
                "lastMaintenance": "2024-10-10",
                "nextMaintenance": "2025-01-10",
                "serialNumber": "SN345678"
            },
            {
                "fireID": "004",
                "type": "Water",
                "location": "Floor 1 - Lobby",
                "lastMaintenance": "2024-09-20",
                "nextMaintenance": "2024-12-20",
                "serialNumber": "SN901234"
            }
        ]
    },
    {
        "id": 3,
        "fire": [
            {
                "fireID": "005",
                "type": "CO2",
                "location": "Floor 1 - Aisle 5",
                "lastMaintenance": "2024-10-01",
                "nextMaintenance": "2025-01-01",
                "serialNumber": "SN567890"
            }
        ]
    },
    {
        "id": 4,
        "fire": [
            {
                "fireID": "006",
                "type": "Dry Chemical",
                "location": "Floor 2 - Room 205",
                "lastMaintenance": "2024-09-15",
                "nextMaintenance": "2024-12-15",
                "serialNumber": "SN012345"
            }
        ]
    }
];
// ข้อมูลถังดับเพลิงอื่นๆ


export function fetchCmData() {
    return CM;
}

export function fetchFireExtinguisherData() {
    return fire_extinguisher_data;
}
