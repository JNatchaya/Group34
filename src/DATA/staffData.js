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
        "BehaviorScore": 95,
        "AssignmentFootprint": [
            {
                "AssignmentID": "A001",
                "Task": "Manage Inventory",
                "Date": "2024-11-01",
                "Status": "Completed"
            },
            {
                "AssignmentID": "A002",
                "Task": "Prepare Report",
                "Date": "2024-11-15",
                "Status": "Pending"
            }
        ]
    },
    {
        "StaffID": "S002",
        "Name": "Jane Smith",
        "Role": "Mechanic",
        "Mail": "jane.smith@mail.com",
        "Tel": "0324123312",
        "UserInformation": [
            {
                "informationID": "I002",
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
                        "ParentName": "Haily Smith",
                        "Relationship": "Mother",
                        "Tel": "1234567890"
                    }
                ],
                "Birthday": "1991-04-05",
                "Age": 35,
                "Height": 168,
                "Weight": 50
            }
        ],
        "BehaviorScore": 88,
        "AssignmentFootprint": [
            {
                "AssignmentID": "A003",
                "Task": "Repair Engine",
                "Date": "2024-11-10",
                "Status": "Completed"
            },
            {
                "AssignmentID": "A004",
                "Task": "Conduct Maintenance",
                "Date": "2024-11-20",
                "Status": "In Progress"
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
        "BehaviorScore": 75,
        "AssignmentFootprint": [
            {
                "AssignmentID": "A005",
                "Task": "Schedule Meetings",
                "Date": "2024-11-12",
                "Status": "Completed"
            },
            {
                "AssignmentID": "A006",
                "Task": "Organize Documents",
                "Date": "2024-11-18",
                "Status": "Pending"
            }
        ]
    },
    {
        "StaffID": "S004",
        "Name": "Bob Brown",
        "Role": "Mechanic",
        "Mail": "bob.brown@mail.com",
        "Tel": "132032421",
        "UserInformation": [
            {
                "informationID": "I004",
                "Address":"101 Main Street, Anytown, USA",
                "parents" : [
                    {
                        "ParentID": "P007",
                        "ParentName": "David Brown",
                        "Relationship": "Father",
                        "Tel": "1234567890"
                    },
                    {   
                        "ParentID": "P008",
                        "ParentName": "Taylor Brown",
                        "Relationship": "Mother",
                        "Tel": "1234567890"
                    }
                ],
                "Birthday": "1983-06-20",
                "Age": 41,
                "Height": 165,
                "Weight": 60
            }
        ],
        "BehaviorScore": 92,
        "AssignmentFootprint": [
            {
                "AssignmentID": "A007",
                "Task": "Inspect Vehicles",
                "Date": "2024-11-05",
                "Status": "Completed"
            },
            {
                "AssignmentID": "A008",
                "Task": "Replace Tires",
                "Date": "2024-11-19",
                "Status": "In Progress"
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
