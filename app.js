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
const darken = (hexColor, magnitude) => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};
function changeColour(e) {
  let currentColour = e.target.style.backgroundColor;
  if (currentColour == "") {
    e.target.style.backgroundColor = "#808080";
  }
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
    } else {
      let inputSize = prompt("Type the desired grid size 16 - 100");
      currentGrid = inputSize;
      createGrid(inputSize);
    }
  });
});
