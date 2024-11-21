// staffData.js

// Staff Data
export const Staff = [
    {
        "StaffID": "S001",
        "Name": "John Doe",
        "Role": "Admin",
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
