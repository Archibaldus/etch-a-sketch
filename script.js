// create 12 divs
for (let i = 0; i < 12; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");
  document.querySelector(".container").appendChild(newDiv);
}
