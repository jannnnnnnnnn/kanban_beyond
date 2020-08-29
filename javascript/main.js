/*----- constants -----*/

/*----- app's state (variables) -----*/
//assuming 3 boards already exist onload
let boardCounter = 3;

/*----- cached element references -----*/
const addBoardBtn = document.querySelector("#addBoardBtn");
const mainSection = document.querySelector("main");
const addTaskBtn1 = document.querySelector("#addTaskBtn1");
const sectionBoard1 = document.querySelector("#board1");

/*----- event listeners -----*/
addBoardBtn.addEventListener("click", addBoard);
addTaskBtn1.addEventListener("click", addTask);

/*----- functions -----*/
function addBoard() {
  //count number of boards
  boardCounter = boardCounter + 1;
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
  addTaskBtn.id = "addTaskBtn" + boardCounter;
  //creating section portion
  const newSection = document.createElement("Section");
  newSection.id = "board" + boardCounter;
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
  sectionBoard1.appendChild(div);
  div.appendChild(form);
  form.appendChild(input);
}

function ShowElement(element) {
  var oldhtml = element.innerHTML;
  var newobj = document.createElement("input");
  newobj.type = "text";
  newobj.value = oldhtml;
  newobj.onblur = function () {
    element.innerHTML = this.value == oldhtml ? oldhtml : this.value;
  };
  element.innerHTML = "";
  element.appendChild(newobj);
  newobj.setSelectionRange(0, oldhtml.length);
  newobj.focus();
}
