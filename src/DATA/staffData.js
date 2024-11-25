// staffData.js

// Staff Data
export const Staff = [
    {
        "StaffID": "S001",
        "Name": "John Doe",
        "Role": "Admin",
        "Mail": "john.doe@mail.com",
        "Tel": "1234567890",
        "UserInformation": [
            {
                "informationID": "I001",
                "Address":"123 Main Street, Anytown, USA",
                "parents" : [
                    {
                        "ParentID": "P001",
                        "ParentName": "Bob Doe",
                        "Relationship": "Father",
                        "Tel": "1234567890"
                    },
                    {
                        "ParentID": "P002",
                        "ParentName": "Jane Doe",
                        "Relationship": "Mother",
                        "Tel": "1234567890"
                    }
                ],
                "Birthday": "1990-01-01",
                "Age": 34,
                "Height": 175,
                "Weight": 75
            }
        ],
        "Behavior": [
            { 
                "Month": [
                    {
                        "MonthID": "M001",
                        "MonthName": "January",
                        "BehaviorScore": 80
                    },
                    {
                        "MonthID": "M002",
                        "MonthName": "February",
                        "BehaviorScore": 90
                    },
                    {
                        "MonthID": "M003",
                        "MonthName": "March",
                        "BehaviorScore": 85
                    },
                    {
                        "MonthID": "M004",
                        "MonthName": "April",
                        "BehaviorScore": 95
                    },
                    {
                        "MonthID": "M005",
                        "MonthName": "May",
                        "BehaviorScore": 75 
                    }
                ]
                
            
            }
        ],
        "AssignmentFootprint": [
            {
                "AssignmentID": "A001",
                "Task": "Manage Inventory",
                "Date": "2024-11-01",
                "AssignmentStatus": "Completed",
                "serialNumber": "SN123456"
            },
            {
                "AssignmentID": "A002",
                "Task": "Prepare Report",
                "Date": "2024-11-15",
                "AssignmentStatus": "Pending",
                "serialNumber": "SN789012"
            }
        ]
    },
    {
        "StaffID": "S002",
        "Name": "Jane Smith",
        "Role": "Mechanic",
        "Mail": "jane.smith@mail.com",
        "Tel": "1234567890",
        "UserInformation": [
            {
                "informationID": "I003",
                "Address":"456 Main Street, Anytown, USA",
                "parents" : [
                    {
                        "ParentID": "P003",
                        "ParentName": "Josh Smith",
                        "Relationship": "Father",
                        "Tel": "1234567890"
                    },
                    {
                        "ParentID": "P004",
                        "ParentName": "Taylor Smith",
                        "Relationship": "Mother",
                        "Tel": "1234567890"
                    }
                ],
                "Birthday": "1990-05-15",
                "Age": 34,
                "Height": 170,
                "Weight": 60
            }
        ],
        "Behavior": [
            { 
                "Month": [
                    {
                        "MonthID": "M001",
                        "MonthName": "January",
                        "BehaviorScore": 80
                    },
                    {
                        "MonthID": "M002",
                        "MonthName": "February",
                        "BehaviorScore": 95
                    },
                    {
                        "MonthID": "M003",
                        "MonthName": "March",
                        "BehaviorScore": 50
                    },
                    {
                        "MonthID": "M004",
                        "MonthName": "April",
                        "BehaviorScore": 70
                    },
                    {
                        "MonthID": "M005",
                        "MonthName": "May",
                        "BehaviorScore": 75 
                    }
                ]
                
            
            }
        ],
        "AssignmentFootprint": [
            {
                "AssignmentID": "A003",
                "Task": "Repair Engine",
                "Date": "2024-11-10",
                "AssignmentStatus": "Completed",
                "serialNumber": "SN222333"
            },
            {
                "AssignmentID": "A004",
                "Task": "Conduct Maintenance",
                "Date": "2024-11-20",
                "AssignmentStatus": "In Progress",
                "serialNumber": "SN777888"
            }
        ]
    },
    {
        "StaffID": "S003",
        "Name": "Alice Johnson",
        "Role": "Admin",
        "Mail": "alice.johnson@mail.com",
        "Tel": "1237834512",
        "UserInformation": [
            {
                "informationID": "I003",
                "Address":"789 Main Street, Anytown, USA",
                "parents" : [
                    {
                        "ParentID": "P005",
                        "ParentName": "Alexander Johnson",
                        "Relationship": "Father",
                        "Tel": "1234567890"
                    },
                    {   
                        "ParentID": "P006",
                        "ParentName": "Emily Johnson",
                        "Relationship": "Mother",
                        "Tel": "1234567890"
                    }
                ],
                "Birthday": "1991-01-29",
                "Age": 35,
                "Height": 170,
                "Weight": 45
            }
        ],
        "Behavior": [
            { 
                "Month": [
                    {
                        "MonthID": "M001",
                        "MonthName": "January",
                        "BehaviorScore": 50
                    },
                    {
                        "MonthID": "M002",
                        "MonthName": "February",
                        "BehaviorScore": 55
                    },
                    {
                        "MonthID": "M003",
                        "MonthName": "March",
                        "BehaviorScore": 70
                    },
                    {
                        "MonthID": "M004",
                        "MonthName": "April",
                        "BehaviorScore": 50
                    },
                    {
                        "MonthID": "M005",
                        "MonthName": "May",
                        "BehaviorScore": 75 
                    }
                ]
                
            
            }
        ],
        "AssignmentFootprint": [
            {
                "AssignmentID": "A005",
                "Task": "Schedule Meetings",
                "Date": "2024-11-12",
                "AssignmentStatus": "Completed",
                "serialNumber": "SN567890",
            },
            {
                "AssignmentID": "A006",
                "Task": "Organize Documents",
                "Date": "2024-11-18",
                "AssignmentStatus": "Pending",
                "serialNumber": "SN111222"
            }
        ]
    },
    {
        "StaffID": "S004",
        "Name": "Bob Brown",
        "Role": "Mechanic",
        "Mail": "bob.brown@mail.com",
        "Tel": "1234567890",
        "UserInformation": [
            {
                "informationID": "I004",
                "Address":"101 Main Street, Anytown, USA",
                "parents" : [
                    {
                        "ParentID": "P009",
                        "ParentName": "David Brown",
                        "Relationship": "Father",
                        "Tel": "1234567890"
                    },
                    {
                        "ParentID": "P010",
                        "ParentName": "Sara Brown",
                        "Relationship": "Mother",
                        "Tel": "1234567890"
                    }
                ],
                "Birthday": "1980-12-05",
                "Age": 44,
                "Height": 190,
                "Weight": 95
            }
        ],
        "Behavior": [
            { 
                "Month": [
                    {
                        "MonthID": "M001",
                        "MonthName": "January",
                        "BehaviorScore": 80
                    },
                    {
                        "MonthID": "M002",
                        "MonthName": "February",
                        "BehaviorScore": 90
                    },
                    {
                        "MonthID": "M003",
                        "MonthName": "March",
                        "BehaviorScore": 85
                    },
                    {
                        "MonthID": "M004",
                        "MonthName": "April",
                        "BehaviorScore": 95
                    },
                    {
                        "MonthID": "M005",
                        "MonthName": "May",
                        "BehaviorScore": 75 
                    }
                ]
                
            
            }
        ],
        "AssignmentFootprint": [
            {
                "AssignmentID": "A007",
                "Task": "Inspect Vehicles",
                "Date": "2024-11-05",
                "AssignmentStatus": "Completed",
                "serialNumber": "SN444777"
            },
            {
                "AssignmentID": "A008",
                "Task": "Replace Tires",
                "Date": "2024-11-19",
                "AssignmentStatus": "In Progress",
                "serialNumber": "SN555888"
            }
        ]
    },
    {
        "StaffID": "S005",
        "Name": "Emily Davis",
        "Role": "Admin",
        "Mail": "emily.davis@mail.com",
        "Tel": "1234567890",
        "UserInformation": [
            {
                "informationID": "I005",
                "Address":"102 Main Street, Anytown, USA",
                "parents" : [
                    {
                        "ParentID": "P011",
                        "ParentName": "Lebron Davis",
                        "Relationship": "Father",
                        "Tel": "1234567890"
                    },
                    {
                        "ParentID": "P012",
                        "ParentName": "Nadia Davis",
                        "Relationship": "Mother",
                        "Tel": "1234567890"
                    }
                ],
                "Birthday": "1995-08-013",
                "Age": 29,
                "Height": 168,
                "Weight": 55
            }
        ],
        "Behavior": [
            { 
                "Month": [
                    {
                        "MonthID": "M001",
                        "MonthName": "January",
                        "BehaviorScore": 75
                    },
                    {
                        "MonthID": "M002",
                        "MonthName": "February",
                        "BehaviorScore": 88
                    },
                    {
                        "MonthID": "M003",
                        "MonthName": "March",
                        "BehaviorScore": 85
                    },
                    {
                        "MonthID": "M004",
                        "MonthName": "April",
                        "BehaviorScore": 95
                    },
                    {
                        "MonthID": "M005",
                        "MonthName": "May",
                        "BehaviorScore": 60
                    }
                ]
                
            
            }
        ],
        "AssignmentFootprint": [
            {
                "AssignmentID": "A009",
                "Task": "Update Database",
                "Date": "2024-11-08",
                "AssignmentStatus": "Completed",
                "serialNumber": "SN999000"
            },
            {
                "AssignmentID": "A010",
                "Task": "Perform Audit",
                "Date": "2024-11-22",
                "AssignmentStatus": "Pending",
                 "serialNumber": "SN444555"
            }
        ]
    },
    {
        "StaffID": "S006",
        "Name": "Michael Wilson",
        "Role": "Mechanic",
        "Mail": "michael.wilson@mail.com",
        "Tel": "1234567890",
        "UserInformation": [
            {
                "informationID": "I006",
                "Address":"103 Main Street, Anytown, USA",
                "parents" : [
                    {
                        "ParentID": "P013",
                        "ParentName": "Dave Wilson",
                        "Relationship": "Father",
                        "Tel": "1234567890"
                    },
                    {
                        "ParentID": "P014",
                        "ParentName": "Scalet Wilson",
                        "Relationship": "Mother",
                        "Tel": "1234567890"
                    }
                ],
                "Birthday": "1989-05-19",
                "Age": 35,
                "Height": 188,
                "Weight": 75
            }
        ],
        "MechanicStatus": "Day Off",
        "Behavior": [
            { 
                "Month": [
                    {
                        "MonthID": "M001",
                        "MonthName": "January",
                        "BehaviorScore": 80
                    },
                    {
                        "MonthID": "M002",
                        "MonthName": "February",
                        "BehaviorScore": 90
                    },
                    {
                        "MonthID": "M003",
                        "MonthName": "March",
                        "BehaviorScore": 85
                    },
                    {
                        "MonthID": "M004",
                        "MonthName": "April",
                        "BehaviorScore": 95
                    },
                    {
                        "MonthID": "M005",
                        "MonthName": "May",
                        "BehaviorScore": 75 
                    }
                ]
                
            
            }
        ],
        "AssignmentFootprint": [
            {
                "AssignmentID": "A011",
                "Task": "Maintain Equipment",
                "Date": "2024-11-07",
                "AssignmentStatus": "Completed",
                "serialNumber": "SN333444"
            },
            {
                "AssignmentID": "A012",
                "Task": "Perform Inspection",
                "Date": "2024-11-21",
                "AssignmentStatus": "In Progress",
                "serialNumber": "SN456789"
            }
        ]
    }
];


/**
 * Fetch all staff data
 * @returns {Array} All staff data
 */
export function fetchStaffData() {
    return Staff;
}

/**
 * Fetch staff by role
 * @param {string} role - The role to filter by (e.g., "Admin" or "Mechanic").
 * @returns {Array} Filtered staff data by role
 */
export function fetchStaffByRole(role) {
    return Staff.filter(staff => staff.Role.toLowerCase() === role.toLowerCase());
}

/**
 * Fetch staff by ID
 * @param {string} staffID - The unique ID of the staff member.
 * @returns {Object|null} The staff member object or null if not found
 */
export function fetchStaffByID(staffID) {
    return Staff.find(staff => staff.StaffID === staffID) || null;
}
