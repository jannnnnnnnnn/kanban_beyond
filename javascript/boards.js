/*----- functions -----*/
function addBoard() {
  //count number of boards
  boardCounter = boardCounter + 1;
  //creating section portion
  const newSection = document.createElement("Section");
  newSection.id = "board" + boardCounter;
  newSection.classList.add("boards");
  //creating div portion
  const div = document.createElement("div");
  div.classList.add("boardsName");
  //creating board title input portion
  const input = document.createElement("input");
  input.type = "text";
  input.value = "Enter List Title";
  input.readOnly = true;
  input.ondblclick = () => {
    input.readOnly = false;
  };
  input.onblur = () => {
    input.readOnly = true;
  };
  //creating dropdown menu portion
  const dropdownBtn = docment.createElement("button");
  //creating add task button portion
  const addTaskBtn = document.createElement("button");
  addTaskBtn.innerHTML = "Add +";
  addTaskBtn.id = "addTaskBtn" + boardCounter;
  //adding elements to the DOM
  mainSection.appendChild(newSection);
  newSection.appendChild(div);
  div.appendChild(input);
  div.appendChild();
  newSection.appendChild(addTaskBtn);
}

function removeBoard(evt) {
  boardCounter = boardCounter - 1;
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
