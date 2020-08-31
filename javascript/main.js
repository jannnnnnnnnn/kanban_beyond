/*----- constants -----*/

/*----- app's state (variables) -----*/
let boardCounter = 3;
let task_id = 1;
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
  newobj.className = "task";
  newobj.innerHTML = `<div class="card-header" id="headingOne">
  <h5 class="mb-0 collapseTitle">
    <button
      class="btn collapsed"
      data-toggle="collapse"
      data-target="#collapse${task_id}"
      aria-expanded="false"
      aria-controls="collapse${task_id}"
    >
      <i class="material-icons md-15">keyboard_arrow_down</i>
    </button>
    <p class="taskText" ondblclick="ShowElement(this)">
      Enter Task
    </p>
  </h5>
</div>
<div id="collapse${task_id}" class="collapse">
  <div class="card-body">
    <label>Detailed info:</label>
    <p ondblclick="ShowElement(this)">Enter Description</p>
    <button onclick="deleteTask(this)">Delete</button>
  </div>
</div>
</div>`;
  task_id += 1;
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
//delete board
function deleteBoard(element) {
  if (confirm("Are you sure you want to delete this column ?")) {
    element.parentNode.parentNode.parentNode.parentNode.remove();
  }
}

//delete task
function deleteTask(element) {
  if (confirm("Are you sure you want to delete this task ?")) {
    element.parentNode.parentNode.parentNode.remove();
  }
}
var taskDiv = document.querySelectorAll(".taskDiv");
taskDiv.forEach((t) => {
  Sortable.create(t, {
    group: "sorting",
    sort: true,
  });
});

var main = document.querySelector(".boardsList");

Sortable.create(main, {
  group: "sorting",
  sort: true,
});
