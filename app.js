const container = document.querySelector(".middle");
const divContainer = document.createElement("div");
divContainer.classList.add("container");
container.appendChild(divContainer);

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square", "square" + i);
  divContainer.appendChild(square);
}
