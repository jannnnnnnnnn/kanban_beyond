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
