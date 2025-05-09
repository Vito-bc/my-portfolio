// ---- 1. DATA --------------------------------
// Labels appear on axes / legends
const labels = ["Brooklyn", "Queens", "Manhattan", "Bronx", "Staten Island"];

// Raw 2020 population counts (source: NYC Open Data summary)

const populations = [2736074, 2405464, 1639872, 1472654, 495747];

// ---- 2. DOUGHNUT CHART ----------------------
// Grab <canvas> 2‑D drawing context
const doughnutCtx = document.getElementById("popDoughnut").getContext("2d");

// Instantiate a new Chart instance
new Chart(doughnutCtx, {
  type: "doughnut",   
  data: {
    labels,           
    datasets: [
      {
        label: "Population",
        data: populations,
        borderWidth: 1, // thin border so slices are distinct without looking chunky
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "NYC Borough Populations (2020) — Doughnut — Vitaliy T.",
      },
      legend: {
        position: "right", // move legend to right to save vertical space
      },
    },
  },
});

// ---- 3. HORIZONTAL BAR CHART ---------------- //
const barCtx = document.getElementById("popBar").getContext("2d");

new Chart(barCtx, {
  type: "bar",         // standard bar chart
  data: {
    labels,
    datasets: [
      {
        label: "Population",
        data: populations,
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: "y",      // flips chart to horizontal orientation
    scales: {
      x: {
        beginAtZero: true, // ensures bars start at 0 for accurate comparison
      },
    },
    plugins: {
      title: {
        display: true,
        text: "NYC Borough Populations (2020) — Horizontal Bar — Vitaliy T.",
      },
    },
  },
});