/*----- constants -----*/

/*----- app's state (variables) -----*/
//assuming 3 boards already exist onload
let boardCounter = 3;

/*----- cached element references -----*/
const addBoardBtn = document.querySelector("#addBoardBtn");
const mainSection = document.querySelector("main");

/*----- event listeners -----*/
addBoardBtn.addEventListener("click", addBoard);

/*----- functions -----*/
function addBoard() {
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
  title.innerHTML = "Enter List Title";
  title.ondblclick = () => {
    ShowElement(this);
  };
  //creating delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.id = "deleteBoard" + boardCounter;
  deleteBtn.innerHTML = "x";
  //creating add task button portion
  const addTaskBtn = document.createElement("button");
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

function removeBoard(evt) {
  boardCounter = boardCounter - 1;
}
