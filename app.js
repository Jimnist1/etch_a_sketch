const container = document.querySelector(".middle");
const divContainer = document.createElement("div");
divContainer.classList.add("container");
container.appendChild(divContainer);

function createGrid(gridSize) {
  for (let row = 0; row < gridSize; row++) {
    for (let column = 0; column < gridSize; row++) {
      const square = document.createElement("div");
      square.classList.add("square", "square" + row);
      square.style.height = 600 / gridSize + "px";
      square.style.width = 600 / gridSize + "px";

      divContainer.appendChild(square);
    }
  }
}

createGrid(0);
