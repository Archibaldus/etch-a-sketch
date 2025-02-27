// const variables
const initialGrid = 256;
let initialRed = 255;
let initialGreen = 102;
let initialBlue = 0;

// create divs
const createDivs = (gridSize) => {
  for (let i = 0; i < gridSize; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");

    // set grid size variable in css
    document.documentElement.style.setProperty(
      "--gridSize",
      Math.sqrt(gridSize)
    );

    // append new boxes to conatiner
    document.querySelector(".container").appendChild(newDiv);
  }
};

// add event listener to boxes
const handleBoxes = (boxes) => {
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.classList.add("hovered");
      // change box colors
      document.documentElement.style.setProperty(
        "--boxColor",
        `rgb(${initialRed}, ${initialGreen}, ${initialBlue})`
      );
      initialRed < 255 ? (initialRed += 1) : (initialRed = 0);
      initialGreen < 255 ? (initialGreen += 1) : (initialGreen = 0);
      initialBlue < 255 ? (initialBlue += 1) : (initialBlue = 0);
    });
  });
};

createDivs(initialGrid);
// query selectors
const boxes = document.querySelectorAll(".box");
const newGridButton = document.querySelector("#new-grid");
// create initial grid and set event listeners
handleBoxes(boxes);

// add event listener to new grid button
newGridButton.addEventListener("click", () => {
  userChoice = prompt("Enter the number of squares per side (1-100): ");
  if (userChoice > 100) {
    alert("Please enter a number between 1-100");
    return;
  }
  const gridSize = userChoice * userChoice;
  // remove current grid
  document.querySelector(".container").innerHTML = "";
  // create new grid
  createDivs(gridSize);
  const boxes = document.querySelectorAll(".box");
  handleBoxes(boxes);
});
