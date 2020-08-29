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

function addTask(element) {
  console.log(element.parentNode);
  var newItem = document.createElement("DIV");
  newItem.innerHTML =
    '<div class="tasks"><div class="dropzone"></div><div id="accordion"><div class="card"> <div class="card-header" id="headingTwo"><h5 class="mb-0"><button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">+</button><p ondblclick="ShowElement(this)">Task 1</p></h5></div><div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion"> <div class="card-body"> <label>Detailed info</label> <input type="text" /> </div> </div> </div> </div> <div class="dropzone"></div> </div>';

  element.parentNode.insertBefore(newItem, element);
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
