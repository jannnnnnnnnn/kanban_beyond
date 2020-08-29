/*----- constants -----*/

/*----- app's state (variables) -----*/
let boardCounter = 4;

/*----- cached element references -----*/
const addBoardBtn = document.querySelector("#addBoardBtn");
const mainSection = document.querySelector("main");
const addTaskBtn1 = document.querySelector("#addTaskBtn1");
const sectionDrop1 = document.querySelector("#drop1");

/*----- event listeners -----*/
addBoardBtn.addEventListener("click", addBoard);
addTaskBtn1.addEventListener("click", addTask);

/*----- functions -----*/
function addBoard() {
  //creating div portion
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.background = "grey";
  div.style.color = "black";
  div.innerHTML = "New Title";
  div.id = "test";
  //creating button portion
  const addTaskBtn = document.createElement("button");
  addTaskBtn.innerHTML = "+";
  //creating section portion
  const newSection = document.createElement("Section");
  newSection.id = "drop" + boardCounter;
  //adding elements to the DOM
  div.appendChild(addTaskBtn);
  newSection.appendChild(div);
  mainSection.appendChild(newSection);
}

function addTask() {
  //creating div portion
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "50px";
  div.style.background = "grey";
  div.style.color = "black";
  div.innerHTML = "New Task";
  div.id = "test";
  //creating form portion
  const form = document.createElement("form");
  //creating input portion
  const input = document.createElement("input");
  input.type = "text";
  //adding elements to the DOM
  sectionDrop1.appendChild(div);
  div.appendChild(form);
  form.appendChild(input);
}
