// Get canvas and context
const canvas = document.getElementById("planetCanvas");
const ctx = canvas.getContext("2d");

// Get controls container
const controlsDiv = document.getElementById("controls");

// Load the JSON data
fetch("data/topics.json")
  .then((response) => response.json())
  .then((data) => {
    const planets = data.planets;
    createButtons(planets);
  })
  .catch((error) => {
    console.error("Failed to load topics.json:", error);
  });

// Create a button for each planet
function createButtons(planets) {
  planets.forEach((planet) => {
    const btn = document.createElement("button");
    btn.textContent = planet.title;
    btn.addEventListener("click", () => displayPlanet(planet));
    controlsDiv.appendChild(btn);
  });
}

// Display planet info and image
function displayPlanet(planet) {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Load and draw planet image
  const img = new Image();
  img.src = planet.image;
  img.onload = () => {
    const imgX = (canvas.width - img.width) / 2;
    const imgY = 50;
    ctx.drawImage(img, imgX, imgY);

    // Draw title and description
    ctx.fillStyle = "#ffffff";
    ctx.font = "16px Arial";
    ctx.fillText(planet.title, 20, canvas.height - 60);
    wrapText(ctx, planet.description, 20, canvas.height - 40, canvas.width - 40, 20);
  };

  // Play audio
  if (planet.audio) {
    const audio = new Audio(planet.audio);
    audio.play().catch((err) => console.log("Audio playback failed:", err));
  }
}

// Helper function to wrap text on canvas
function wrapText(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + " ";
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && i > 0) {
      context.fillText(line, x, y);
      line = words[i] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}

// Register Service Worker for PWA support
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('service-worker.js')
    .then(() => console.log("Service Worker Registered!"))
    .catch((err) => console.log("Service Worker registration failed:", err));
}
