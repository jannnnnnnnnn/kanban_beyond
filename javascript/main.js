/*----- constants -----*/

/*----- app's state (variables) -----*/

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
    '<div class="task" id="accordion"> <div class="dropzone"></div> <div class="card-header" id="headingTwo"> <h5 class="mb-0"><button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">+</button><input type="text" /> </h5> </div> <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion"> <div class="card-body"> <label>Detailed info</label> <input type="text" /> </div> </div> <div class="dropzone"></div></div>';
  element.parentNode.insertBefore(newobj, element);
}

//add
function addBoard() {}
function deleteBoard() {}
