const fire_extinguisher_data = [
  {
      "id": 1,
      "fire": [
          {
              "fireID": "001",
              "type": "CO2",
              "location": "Floor 1 - Aisle 5",
              "lastMaintenance": "2024-10-01",
              "nextMaintenance": "2025-01-01"
          },
          {
              "fireID": "002",
              "type": "Dry Chemical",
              "location": "Floor 2 - Room 205",
              "lastMaintenance": "2024-09-15",
              "nextMaintenance": "2024-12-15"
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
              "nextMaintenance": "2025-01-10"
          },
          {
              "fireID": "004",
              "type": "Water",
              "location": "Floor 1 - Lobby",
              "lastMaintenance": "2024-09-20",
              "nextMaintenance": "2024-12-20"
          }
      ]
  },
  {
      "id": 3,
      "fire": [
          {
              "fireID": "005",
              "type": "CO2",
              "location": "Floor 1 - Office",
              "lastMaintenance": "2024-08-30",
              "nextMaintenance": "2024-11-30"
          }
      ]
  },
  {
      "id": 4,
      "fire": [
          {
              "fireID": "006",
              "type": "Water",
              "location": "Floor 2 - Kitchen",
              "lastMaintenance": "2024-09-05",
              "nextMaintenance": "2024-12-05"
          }
      ]
  },
  {
      "id": 5,
      "fire": [
          {
              "fireID": "007",
              "type": "Water",
              "location": "Floor 3 - Bathroom",
              "lastMaintenance": "2024-08-25",
              "nextMaintenance": "2024-11-25"
          }
      ]
  },
  {
      "id": 6,
      "fire": [
          {
              "fireID": "008",
              "type": "Water",
              "location": "Floor 1 - Lobby",
              "lastMaintenance": "2024-09-15",
              "nextMaintenance": "2024-12-15"
          }
      ]
  },
  {
      "id": 7,
      "fire": [
          {
              "fireID": "009",
              "type": "Water",
              "location": "Floor 2 - Office",
              "lastMaintenance": "2024-08-20",
              "nextMaintenance": "2024-11-20"
          }
      ]
  },
  {
      "id": 8,
      "fire": [
          {
              "fireID": "010",
              "type": "Water",
              "location": "Floor 3 - Kitchen",
              "lastMaintenance": "2024-09-10",
              "nextMaintenance": "2024-12-10"
          }
      ]
  }
]

export function fetchFireExtinguisherData() {
  return fire_extinguisher_data;
}
