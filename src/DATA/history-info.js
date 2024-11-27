    // array detail == serialNumber type status date

    export const History_info = [
        {
            "serialNumber": "SN123456",
            "DPName": "Zeta_Department_01",
            "type": "CO2",
            "status": "Completed",
            "date": "2024-10-01",
            "taskHolder": "John Doe",
            "addminHolder": "Alice Johnson",
            "pressureGuage": [
                {   
                    "status": "Yellow",
                    "details": "Need to be fill pressure"
                },
            ],
            "pullPinAndTemperSeal": [
                {
                    "status": "Green",
                    "details": "null"
                },
            ],
            "handle": [
                {
                    "status": "Green",
                    "details": "null"
                },
            ],
            "hose": [
                {
                    "status": "Green",
                    "details": "null"
                },
            ],
            "fireExtinguisherBody": [
                {
                    "status": "Green",
                    "details": "null"
                },
            ],
            "fireExtinguisherExpire": [
                {
                    "status": "Green",
                    "details": "null"
                },
            ],
            "comment": [
                {
                "well": false,
                "abitOfMaintains": true,
                "requiredChange": false,
                "other": false
            },
            ],
            "reportDetails": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore voluptate vero blanditiis, a est.",
            "reportImage": [
                {
                    
                }
            ]
        },
        {
            "serialNumber": "SN789012",
            "DPName": "Alpha_Department_01",
            "type": "Dry Chemical",
            "status": "Pending",
            "date": "2024-11-15",
            "taskHolder": "John Doe",
            "addminHolder": "Emily Davis",
            "pressureGuage": [
                {   
                    "status": "null",
                    "details": "null"
                },
            ],
            "pullPinAndTemperSeal": [
                {
                    "status": "null",
                    "details": "null"
                },
            ],
            "handle": [
                {
                    "status": "null",
                    "details": "null"
                },
            ],
            "hose": [
                {
                    "status": "null",
                    "details": "null"
                },
            ],
            "fireExtinguisherBody": [
                {
                    "status": "null",
                    "details": "null"
                },
            ],
            "fireExtinguisherExpire": [
                {
                    "status": "null",
                    "details": "null"
                },
            ],
            "comment": [
                {
                    "well": "false",
                    "abitOfMaintains": "true",
                    "requiredChange": "false",
                    "other": "false"
                },
            ],
            "reportDetails": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore voluptate vero blanditiis, a est.",
            "reportImage": [
                {
                    
                }
            ]
        },
        {
            "serialNumber": "SN222333",
            "DPName": "Beta_Department_02",
            "type": "CO2",
            "status": "Completed",
            "date": "2024-11-10",
            "taskHolder": "Jane Smith",
            "addminHolder": "John Doe",
            "pressureGuage": [
                {   
                    "status": "Green",
                    "details": "null"
                },
            ],
            "pullPinAndTemperSeal": [
                {
                    "status": "Green",
                    "details": "null"
                },
            ],
            "handle": [
                {
                    "status": "Green",
                    "details": "null"
                },
            ],
            "hose": [
                {
                    "status": "Green",
                    "details": "null"
                },
            ],
            "fireExtinguisherBody": [
                {
                    "status": "Green",
                    "details": "null"
                },
            ],
            "fireExtinguisherExpire": [
                {
                    "status": "Green",
                    "details": "null"
                },
            ],
            "comment": [
                {
                    "well": "false",
                    "abitOfMaintains": "false",
                    "requiredChange": "false",
                    "other": "false"
                },
            ],
            "reportDetails": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore voluptate vero blanditiis, a est.",
            "reportImage": [
                {
                    
                }
            ]
        },
        {
            "serialNumber": "SN777888",
            "DPName": "Gamma_Department_01",
            "type": "CO2",
            "status": "In Progress",
            "date": "2024-11-10",
            "taskHolder": "Jane Smith",
            "addminHolder": "Alice Johnson",
            "pressureGuage": [
                {   
                    "status": "null",
                    "details": "null"
                },
            ],
            "pullPinAndTemperSeal": [
                {
                    "status": "null",
                    "details": "null"
                },
            ],
            "handle": [
                {
                    "status": "null",
                    "details": "null"
                },
            ],
            "hose": [
                {
                    "status": "null",
                    "details": "null"
                },
            ],
            "fireExtinguisherBody": [
                {
                    "status": "null",
                    "details": "null"
                },
            ],
            "fireExtinguisherExpire": [
                {
                    "status": "null",
                    "details": "null"
                },
            ],
            "comment": [
                {
                    "well": "false",
                    "abitOfMaintains": "false",
                    "requiredChange": "false",
                    "other": "false"
                },
            ],
            "reportDetails": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore voluptate vero blanditiis, a est.",
            "reportImage": [
                {
                    
                }
            ]
        },
    ]

    export const createSectionsFromHistory = (selectedSerialNumber) => {
        // Find the specific history item based on the serial number
        const item = History_info.find((item) => item.serialNumber === selectedSerialNumber);
      
        // Return an empty array if no matching item is found
        if (!item) return [];
      
        // Create and return the sections
        return [
          {
            title: "Pressure Gauge",
            status: `${item.pressureGuage[0]?.status || "N/A"}`,
            content: `Details: ${item.pressureGuage[0]?.details || "N/A"}`,
          },
          {
            title: "Pull Pin and Temper Seal",
            status: `${item.pullPinAndTemperSeal[0]?.status || "N/A"}`,
            content: `Details: ${item.pullPinAndTemperSeal[0]?.details || "N/A"}`,
          },
          {
            title: "Handle",
            status: `${item.handle[0]?.status || "N/A"}`,
            content: `Details: ${item.handle[0]?.details || "N/A"}`,
          },
          {
            title: "Hose",
            status: `${item.hose[0]?.status || "N/A"}`,
            content: `Details: ${item.hose[0]?.details || "N/A"}`,
          },
          {
            title: "Fire Extinguisher Body",
            status: `${item.fireExtinguisherBody[0]?.status || "N/A"}`,
            content: `Details: ${item.fireExtinguisherBody[0]?.details || "N/A"}`,
          },
          {
            title: "Fire Extinguisher Expire",
            status: `${item.fireExtinguisherExpire[0]?.status || "N/A"}`,
            content: `Details: ${item.fireExtinguisherExpire[0]?.details || "N/A"}`,
          },
        ];
      };