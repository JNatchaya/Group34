export const CM = [
    {
        CMname: "Company_1",
        status: "On site",
        due: "2024-12-15",
        DPCH: [
            {
                DPName: "C1_Department_01",
                DPLocation: { lat: 13.7563, lng: 100.5018 },
                color: "red",
            },
            {
                DPName: "C1_Department_02",
                DPLocation: { lat: 13.7367, lng: 100.5231 },
                color: "green",
            },
        ],
    },
    {
        CMname: "Company_2",
        status: "Waited",
        due: "2024-11-30",
        DPCH: [
            {
                DPName: "C2_Department_01",
                DPLocation: { lat: 13.7461, lng: 100.5375 },
                color: "blue",
            },
            {
                DPName: "C2_Department_02",
                DPLocation: { lat: 13.7661, lng: 100.5445 },
                color: "yellow",
            },
        ],
    },
];


export function fetchCmData() {
    return CM;
}
