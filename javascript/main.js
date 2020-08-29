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

//add button must in the task list divison
//onclick='addTask(this)'
function addTask(element) {
  var newobj = document.createElement("div");
  newobj.innerHTML =
    ' <div class="tasks"><div class="dropzone"></div><div id="accordion"><div class="card"><div class="card-header" id="headingTwo"><h5 class="mb-0"><button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">+</button><p ondblclick="ShowElement(this)">Task 1</p></h5></div><div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion"><div class="card-body"><label>Detailed info</label> <input type="text" /></div></div></div></div><div class="dropzone"></div></div>';
  element.parentNode.insertBeofre(newobj, element);
}
