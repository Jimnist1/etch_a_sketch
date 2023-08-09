const container = document.querySelector(".middle");
const divContainer = document.createElement("div");
divContainer.classList.add("container");
container.appendChild(divContainer);

function createGrid(gridSize) {
  if (gridSize > 100) alert("This Grid is dangerously large");
  else if (gridSize < 16) alert("This Grid is just too small");
  else {
    resetGrid();
    for (let row = 0; row < gridSize; row++) {
      for (let column = 0; column < gridSize; column++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = 600 / gridSize + "px";
        square.style.width = 600 / gridSize + "px";
        square.addEventListener("mouseover", changeColour);
        divContainer.appendChild(square);
      }
    }
  }
}
let colourScale = false;
function changeScale() {
  if (colourScale == false) colourScale = true;
  else colourScale = false;
}
function darken(colour, magnitude) {
  let rgbList = colour.split(/[,()]/);
  let r = rgbList[rgbList.length - 4];
  let g = rgbList[rgbList.length - 3];
  let b = rgbList[rgbList.length - 2];
  let darkR = r - magnitude;
  let darkG = g - magnitude;
  let darkB = b - magnitude;
  return `rgb(${darkR},${darkG},${darkB})`;
}
function rgbNumRandom() {
  return Math.floor(Math.random() * 256);
}
function colourRandomiser() {
  let randR = rgbNumRandom();
  let randG = rgbNumRandom();
  let randB = rgbNumRandom();
  return `rgb(${randR},${randG},${randB})`;
}
function changeColour(e) {
  let currentColour = e.target.style.backgroundColor;
  if (currentColour == "" && colourScale == false)
    e.target.style.backgroundColor = "rgb(50,50,50)";
  else if (currentColour == "" && colourScale == true)
    e.target.style.backgroundColor = colourRandomiser();
  else e.target.style.backgroundColor = darken(currentColour, 5);
}
function resetGrid() {
  while (divContainer.firstChild) {
    divContainer.removeChild(divContainer.lastChild);
  }
}
createGrid(16);
let currentGrid = 16;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "resetButton") {
      resetGrid();
      createGrid(currentGrid);
    } else if (button.id == "colourButton") changeScale();
    else {
      let inputSize = prompt("Type the desired grid size 16 - 100");
      currentGrid = inputSize;
      createGrid(inputSize);
    }
  });
});
