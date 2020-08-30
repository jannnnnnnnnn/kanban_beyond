/*----- constants -----*/

/*----- app's state (variables) -----*/
let boardCounter = 3;

/*----- cached element references -----*/

/*----- event listeners -----*/

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
function addOneTask(element) {
  console.log(element);
  var newobj = document.createElement("DIV");
  newobj.innerHTML =
    '<div class="task" id="accordion"> <div class="dropzone"></div> <div class="card-header" id="headingTwo"> <div class="taskDiv" draggable="true" ondragstart="event.dataTransfer.setData("text/plain",null)"><h5 class="mb-0"><button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">+</button><input type="text" /> </h5> </div> </div> <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion"> <div class="card-body"> <label>Detailed info</label> <input type="text" /> </div> </div> <div class="dropzone"></div></div>';
  element.parentNode.insertBefore(newobj, element);
}

function addBoard() {
  const mainSection = document.querySelector("main");
  //count number of boards
  boardCounter = boardCounter + 1;
  //creating section portion
  const newSection = document.createElement("Section");
  newSection.id = "board" + boardCounter;
  newSection.classList.add("boardsDiv");
  newSection.draggable = true;
  newSection.ondragstart = () => {
    event.dataTransfer.setData("text/plain", null);
  };
  //creating dropzone section
  const dropzoneDiv = document.createElement("div");
  dropzoneDiv.classList.add("boardDropzone");
  //creating board portion
  const boardDiv = document.createElement("div");
  boardDiv.classList.add("boards");
  //creating board title div portion
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("titleBoard");
  //creating title portion
  const title = document.createElement("h5");
  title.classList.add("help", "title");
  title.innerHTML =
    'Enter List Title<span class="tooltipText">Tooltip text</span>';
  title.ondblclick = () => {
    ShowElement(this);
  };
  //creating delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.id = "deleteBoard" + boardCounter;
  deleteBtn.classList.add("btn", "btn-outline-secondary", "boardMenu");
  deleteBtn.type = "button";
  deleteBtn.innerHTML = '<i class="material-icons">delete_outline</i>';
  //creating add task button portion
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("btn", "btn-outline-secondary", "w-100");
  addTaskBtn.onclick = () => {
    addOneTask(this);
  };
  addTaskBtn.innerHTML = "Add +";
  addTaskBtn.id = "addTaskBtn" + boardCounter;

  //adding elements to the DOM
  mainSection.appendChild(newSection);
  newSection.appendChild(dropzoneDiv);
  newSection.appendChild(boardDiv);
  boardDiv.appendChild(titleDiv);
  titleDiv.appendChild(title);
  titleDiv.appendChild(deleteBtn);
  boardDiv.appendChild(addTaskBtn);
  newSection.appendChild(dropzoneDiv);
}

function deleteBoard(evt) {
  alert("Are you sure you want to delete" + evt);
  console.log(evt);
}
