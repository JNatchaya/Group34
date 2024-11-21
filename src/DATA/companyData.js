export const CM = [
    {
      CMname: "TechNova",
      status: "On site",
      due: "2024-12-15",
      DPCH: [
        {
          DPName: "Alpha_Department_01",
          DPLocation: { lat: 13.7563, lng: 100.5018 },
          color: "red",
        },
        {
          DPName: "Beta_Department_02",
          DPLocation: { lat: 13.7367, lng: 100.5231 },
          color: "red",  // Same color as first department
        },
      ],
    },
    {
      CMname: "GreenPulse",
      status: "Waited",
      due: "2024-11-30",
      DPCH: [
        {
          DPName: "Gamma_Department_01",
          DPLocation: { lat: 13.7461, lng: 100.5375 },
          color: "green",
        },
        {
          DPName: "Delta_Department_02",
          DPLocation: { lat: 13.7661, lng: 100.5445 },
          color: "green",  // Same color as first department
        },
      ],
    },
    {
      CMname: "NovaCraft",
      status: "On site",
      due: "2024-11-10",
      DPCH: [
        {
          DPName: "Zeta_Department_01",
          DPLocation: { lat: 13.8154, lng: 100.4820 },
          color: "purple",
        },
        {
          DPName: "Eta_Department_02",
          DPLocation: { lat: 13.8142, lng: 100.4835 },
          color: "purple",  // Same color as first department
        },
      ],
    },
    {
      CMname: "CyberWave",
      status: "Completed",
      due: "2024-10-25",
      DPCH: [
        {
          DPName: "Theta_Department_01",
          DPLocation: { lat: 13.7649, lng: 100.5031 },
          color: "cyan",
        },
        {
          DPName: "Iota_Department_02",
          DPLocation: { lat: 13.7655, lng: 100.5073 },
          color: "cyan",  // Same color as first department
        },
      ],
    },
    {
      CMname: "SkyTech",
      status: "On site",
      due: "2024-12-05",
      DPCH: [
        {
          DPName: "Kappa_Department_01",
          DPLocation: { lat: 13.7554, lng: 100.5022 },
          color: "pink",
        },
        {
          DPName: "Lambda_Department_02",
          DPLocation: { lat: 13.7561, lng: 100.5035 },
          color: "pink",  // Same color as first department
        },
        {
          DPName: "Mu_Department_03",
          DPLocation: { lat: 13.7581, lng: 100.5001 },
          color: "pink",  // Same color as first department
        },
      ],
    },
    {
      CMname: "QuantumTech",
      status: "Waited",
      due: "2024-11-20",
      DPCH: [
        {
          DPName: "Nu_Department_01",
          DPLocation: { lat: 13.7236, lng: 100.5293 },
          color: "violet",
        },
        {
          DPName: "Xi_Department_02",
          DPLocation: { lat: 13.7232, lng: 100.5305 },
          color: "violet",  // Same color as first department
        },
      ],
    },
  ];


export function fetchCmData() {
    return CM;
}
