/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
let clmn1 = document.querySelector(".clmn1");

/*----- event listeners -----*/
clmn1.addEventListener("ondragstart", clickingTasks);
/*----- functions -----*/
function clickingTasks(e) {
  clickedTask = e.target;
  if (!clickedTask.classList.contains("tasks")) {
    return;
  }
  e.dataTransfer.setData("text", e.target.id);
}
