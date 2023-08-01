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
function changeColour(e) {
  e.target.classList.add("blackHover");
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
