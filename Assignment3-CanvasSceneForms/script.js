/*
  1. Get references to DOM elements
*/
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Radio buttons for CANVAS background
const bgRadios = document.querySelectorAll('input[name="bgChoice"]');

// Slider for character
const positionSlider = document.getElementById('positionSlider');

// Checkboxes for toggling items
const toggleItem1 = document.getElementById('toggleItem1');
const toggleItem2 = document.getElementById('toggleItem2');
const toggleItem3 = document.getElementById('toggleItem3');

// Sound Buttons
const soundBtn1 = document.getElementById('soundBtn1');
const soundBtn2 = document.getElementById('soundBtn2');
const soundBtn3 = document.getElementById('soundBtn3');

// Radio buttons for the FULL PAGE background
const pageBgRadios = document.querySelectorAll('input[name="pageBgChoice"]');

/*
 2. Load images and sounds
*/
// FULL PAGE Background
pageBgRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (radio.value === 'bg1') {
      document.body.style.backgroundImage = 'url("assets/images/background1.jpg")';
    } else if (radio.value === 'bg2') {
      document.body.style.backgroundImage = 'url("assets/images/background2.jpg")';
    } else if (radio.value === 'bg3') {
      document.body.style.backgroundImage = 'url("assets/images/background3.jpg")';
    }
  
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    
  });
});

// Images for the CANVAS background--
const bg1 = new Image();
bg1.src = 'assets/canvasImages/bgCanvas1.jpg'; 
const bg2 = new Image();
bg2.src = 'assets/canvasImages/bgCanvas2.jpg';
const bg3 = new Image();
bg3.src = 'assets/canvasImages/bgCanvas3.jpg';

// Items for toggling
const item1 = new Image();
item1.src = 'assets/items/item1.png';
const item2 = new Image();
item2.src = 'assets/items/item2.png';
const item3 = new Image();
item3.src = 'assets/items/item3.png';

// Character image
const characterImg = new Image();
characterImg.src = 'assets/character.png';

// Sound effects
const sound1 = new Audio('assets/sound files/sound1.wav');
const sound2 = new Audio('assets/sound files/sound2.wav');
const sound3 = new Audio('assets/sound files/sound3.wav');

/*
 3. State variables
*/
let currentBg = bg1;    // default canvas background
let characterPos = parseInt(positionSlider.value, 10); 

/*
 4. Event listeners
*/
// Radio buttons for the CANVAS background--
bgRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (radio.value === 'bg1') currentBg = bg1;
    if (radio.value === 'bg2') currentBg = bg2;
    if (radio.value === 'bg3') currentBg = bg3;
    drawScene();
  });
});

// Slider for character movement--
positionSlider.addEventListener('input', () => {
  characterPos = parseInt(positionSlider.value, 10);
  drawScene();
});

// Checkboxes for item toggling--
[toggleItem1, toggleItem2, toggleItem3].forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    drawScene();
  });
});

// Buttons for sound effects--
soundBtn1.addEventListener('click', () => sound1.play());
soundBtn2.addEventListener('click', () => sound2.play());
soundBtn3.addEventListener('click', () => sound3.play());

/*
5. Draw the Scene on the Canvas
*/
function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the selected background image to fill the canvas
  ctx.drawImage(currentBg, 0, 0, canvas.width, canvas.height);

  // Draw the character
  ctx.drawImage(characterImg, characterPos, 300, 50, 50);

  // Conditionally draw items based on checkboxes
  if (toggleItem1.checked) {
    ctx.drawImage(item1, 100, 100, 50, 50);
  }
  if (toggleItem2.checked) {
    ctx.drawImage(item2, 200, 150, 50, 50);
  }
  if (toggleItem3.checked) {
    ctx.drawImage(item3, 300, 200, 50, 50);
  }
}

window.addEventListener('load', () => {
  drawScene();
});
