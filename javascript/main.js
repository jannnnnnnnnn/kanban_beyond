/*----- constants -----*/

/*----- app's state (variables) -----*/
let boardCounter = 3;
let task_id = 1;
/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/
draggableTask();
draggableBoard();

function ShowElement(element) {
  var oldhtml = element.innerHTML;
  var newobj = document.createElement("input");
  newobj.type = "text";
  newobj.value = oldhtml;
  newobj.onblur = function () {
    if (this.value == oldhtml) {
      element.innerHTML = oldhtml;
    } else if (this.value == "") {
      element.innerHTML = "&nbsp";
    } else {
      element.innerHTML = this.value;
    }
  };
  element.innerHTML = "";
  element.appendChild(newobj);
  newobj.setSelectionRange(0, oldhtml.length);
  newobj.focus();
}

//add button must in the task list divison
//onclick='addTask(this)'
function addOneTask(element) {
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
  draggableTask();
}

function addBoard() {
  var newobj = document.createElement("SECTION");
  newobj.className = "boardsDiv";
  newobj.innerHTML = `
  <div class="boards">
    <div class="titleBoard addBorder">
      <div></div>
      <h5 class="help title" ondblclick="ShowElement(this)">
        To do:
        <span class="tooltipText">Tooltip text</span>
      </h5>
      <button class="btn btn-link" type="button">
        <i class="material-icons md-15" onclick="deleteBoard(this)"
          >delete_outline</i
        >
      </button>
    </div>
    <!-- This is tasks list -->

    <div
      class="taskDiv"
      draggable="true"
      ondragstart="event.dataTransfer.setData('text/plain',null)"
    >
      <!-- this is where task content starts -->

      <div class="task" id="accordion">
        <div class="card-header" id="headingOne">
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
      </div>
    </div>
    <!-- this is where task content ends -->
    <button
      type="button"
      class="btn btn-outline-secondary w-100"
      onclick="addOneTask(this)"
    >
      Add Task +
    </button>

    <!-- This is where tasks list end -->
  </div>`;
  task_id += 1;
  document.querySelector(".boardsList").appendChild(newobj);
  draggableBoard();
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

function draggableTask() {
  var taskDiv = document.querySelectorAll(".task");
  taskDiv.forEach((t) => {
    Sortable.create(t, {
      group: "nested",
      animation: 150,
      fallbackOnBody: true,
      swapThreshold: 0.65,
    });
  });
}

function draggableBoard() {
  var main = document.querySelector(".boardsList");

  Sortable.create(main, {
    animation: 150,
    ghostClass: "blue-background-class",
  });
}
