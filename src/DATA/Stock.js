export const Stocks = [
    {
        type: "Water",
        img: "water_extinguisher.png",
        typeChild: [
            {
                model: "Water Model A",
                brand: "AquaBrand",
                img: "water_model_a.png",
                Publisher: "CompanyA",
                type: "Water",
                property: {
                    stockRemain: 50,
                    ClassRating: 4,
                    Capacity: "9 L",
                    Discharge: "30", 
                    OperatingTemperatureRange: "5-60°C",
                    ULRating: "2A"
                }
            },
            {
                model: "Water Model B",
                brand: "AquaBrand", 
                img: "water_model_b.png",
                Publisher: "CompanyB",
                type: "Water",
                property: {
                    stockRemain: 200,
                    ClassRating: 3,
                    Capacity: "6 L",
                    Discharge: "25", 
                    OperatingTemperatureRange: "5-55°C",
                    ULRating: "1A"
                }
            },
            {
                model: "Water Model C",
                brand: "H2OFire",
                img: "water_model_c.png",
                Publisher: "CompanyC",
                type: "Water",
                property: {
                    stockRemain: 150,
                    ClassRating: 5,
                    Capacity: "12 L",
                    Discharge: "45", 
                    OperatingTemperatureRange: "0-60°C",
                    ULRating: "3A"
                }
            }
        ]
    },
    {
        type: "Foam",
        img: "foam_extinguisher.png",
        typeChild: [
            {
                model: "Foam Model X",
                brand: "FoamShield",
                img: "foam_model_x.png",
                Publisher: "CompanyC",
                type: "Foam",
                property: {
                    stockRemain: 120,
                    ClassRating: 5,
                    Capacity: "6 L",
                    Discharge: "20", 
                    OperatingTemperatureRange: "-5-50°C",
                    ULRating: "2A:10B"
                }
            },
            {
                model: "Foam Model Y",
                brand: "FoamShield", // Same brand as Model X
                img: "foam_model_y.png",
                Publisher: "CompanyD",
                type: "Foam",
                property: {
                    stockRemain: 80,
                    ClassRating: 4,
                    Capacity: "9 L",
                    Discharge: "35", 
                    OperatingTemperatureRange: "-5-45°C",
                    ULRating: "3A:20B"
                }
            },
            {
                model: "Foam Model Z",
                brand: "FoamMaster",
                img: "foam_model_z.png",
                Publisher: "CompanyE",
                type: "Foam",
                property: {
                    stockRemain: 100,
                    ClassRating: 4,
                    Capacity: "7 L",
                    Discharge: "28", 
                    OperatingTemperatureRange: "-5-45°C",
                    ULRating: "2A:15B"
                }
            }
        ]
    },
    {
        type: "Dry Powder",
        img: "dry_powder_extinguisher.png",
        typeChild: [
            {
                model: "Powder Model P",
                brand: "PowderPro",
                img: "powder_model_p.png",
                Publisher: "CompanyE",
                type: "Dry Powder",
                property: {
                    stockRemain: 300,
                    ClassRating: 5,
                    Capacity: "4 kg",
                    Discharge: "15", 
                    OperatingTemperatureRange: "-10-50°C",
                    ULRating: "2A:20B:C"
                }
            },
            {
                model: "Powder Model Q",
                brand: "PowderPro", // Same brand as Model P
                img: "powder_model_q.png",
                Publisher: "CompanyF",
                type: "Dry Powder",
                property: {
                    stockRemain: 500,
                    ClassRating: 6,
                    Capacity: "6 kg",
                    Discharge: "25", 
                    OperatingTemperatureRange: "-20-55°C",
                    ULRating: "3A:40B:C"
                }
            },
            {
                model: "Powder Model R",
                brand: "FireGuard",
                img: "powder_model_r.png",
                Publisher: "CompanyG",
                type: "Dry Powder",
                property: {
                    stockRemain: 400,
                    ClassRating: 5,
                    Capacity: "5 kg",
                    Discharge: "20", 
                    OperatingTemperatureRange: "-15-50°C",
                    ULRating: "2A:30B:C"
                }
            }
        ]
    },
    {
        type: "CO2",
        img: "co2_extinguisher.png",
        typeChild: [
            {
                model: "CO2 Model M",
                brand: "CarbonGuard",
                img: "co2_model_m.png",
                Publisher: "CompanyG",
                type: "CO2",
                property: {
                    stockRemain: 180,
                    ClassRating: 4,
                    Capacity: "2 kg",
                    Discharge: "20", 
                    OperatingTemperatureRange: "-30-60°C",
                    ULRating: "5B:C"
                }
            },
            {
                model: "CO2 Model N",
                brand: "CarbonGuard", // Same brand as Model M
                img: "co2_model_n.png",
                Publisher: "CompanyH",
                type: "CO2",
                property: {
                    stockRemain: 250,
                    ClassRating: 5,
                    Capacity: "5 kg",
                    Discharge: "35", 
                    OperatingTemperatureRange: "-25-55°C",
                    ULRating: "10B:C"
                }
            },
            {
                model: "CO2 Model O",
                brand: "CO2Blast",
                img: "co2_model_o.png",
                Publisher: "CompanyI",
                type: "CO2",
                property: {
                    stockRemain: 220,
                    ClassRating: 4,
                    Capacity: "3 kg",
                    Discharge: "25", 
                    OperatingTemperatureRange: "-35-55°C",
                    ULRating: "8B:C"
                }
            }
        ]
    },
    {
        type: "Wet Chemical",
        img: "wet_chemical_extinguisher.png",
        typeChild: [
            {
                model: "Chemical Model S",
                brand: "SafeChem",
                img: "chemical_model_s.png",
                Publisher: "CompanyI",
                type: "Wet Chemical",
                property: {
                    stockRemain: 70,
                    ClassRating: 3,
                    Capacity: "6 L",
                    Discharge: "25", 
                    OperatingTemperatureRange: "10-50°C",
                    ULRating: "1A:F"
                }
            },
            {
                model: "Chemical Model T",
                brand: "SafeChem", // Same brand as Model S
                img: "chemical_model_t.png",
                Publisher: "CompanyJ",
                type: "Wet Chemical",
                property: {
                    stockRemain: 60,
                    ClassRating: 4,
                    Capacity: "9 L",
                    Discharge: "30", 
                    OperatingTemperatureRange: "5-45°C",
                    ULRating: "2A:F"
                }
            },
            {
                model: "Chemical Model U",
                brand: "FireChem",
                img: "chemical_model_u.png",
                Publisher: "CompanyK",
                type: "Wet Chemical",
                property: {
                    stockRemain: 50,
                    ClassRating: 5,
                    Capacity: "7 L",
                    Discharge: "30", 
                    OperatingTemperatureRange: "5-45°C",
                    ULRating: "2A:10F"
                }
            }
        ]
    }
];
