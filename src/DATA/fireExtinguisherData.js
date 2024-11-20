// fireExtinguisherData.js

export const fire_extinguisher_data = [
    {
        "DPName": "C1_Department_01",
        "fire": [
            {
                "type": "CO2",
                "location": "Floor 1 - Aisle 5",
                "lastMaintenance": "2024-10-01",
                "nextMaintenance": "2025-01-01",
                "serialNumber": "SN123456",
                "status": "Active"
            },
            {
                "type": "Dry Chemical",
                "location": "Floor 2 - Room 205",
                "lastMaintenance": "2024-09-15",
                "nextMaintenance": "2024-12-15",
                "serialNumber": "SN789012",
                "status": "Inactive"

            }
        ]
    },
    {
        "DPName": "C1_Department_02",
        "fire": [
            {
                "type": "Foam",
                "location": "Floor 3 - Near Elevator",
                "lastMaintenance": "2024-10-10",
                "nextMaintenance": "2025-01-10",
                "serialNumber": "SN345678",
                "status": "Active"

            },
            {
                "type": "Water",
                "location": "Floor 1 - Lobby",
                "lastMaintenance": "2024-09-20",
                "nextMaintenance": "2024-12-20",
                "serialNumber": "SN901234",
                "status": "Inactive"
            }
        ]
    },
    {
        "DPName": "C2_Department_01",
        "fire": [
            {
                "type": "CO2",
                "location": "Floor 1 - Aisle 5",
                "lastMaintenance": "2024-10-01",
                "nextMaintenance": "2025-01-01",
                "serialNumber": "SN567890",
                "status": "Active"
            }
        ]
    },
    {
        "DPName": "C2_Department_02",
        "fire": [
            {
                "type": "Dry Chemical",
                "location": "Floor 2 - Room 205",
                "lastMaintenance": "2024-09-15",
                "nextMaintenance": "2024-12-15",
                "serialNumber": "SN012345",
                "status": "Inactive"
            }
        ]
    }
];

export function fetchFireExtinguisherData() {
    return fire_extinguisher_data;
}
