var draggedBoards;

/* events fired on the draggable target */
document.addEventListener("drag", function (event) {}, false);

document.addEventListener(
  "dragstart",
  function (event) {
    // store a ref. on the dragged elem
    draggedBoards = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function (event) {
    // reset the transparency
    event.target.style.opacity = "";
  },
  false
);

/* events fired on the drop targets */
document.addEventListener(
  "dragover",
  function (event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function (event) {
    if (!draggedBoards.classList.contains("boardsDiv")) {
      return;
    }
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "boardDropzone") {
      event.target.style.background = "purple";
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function (event) {
    if (!draggedBoards.classList.contains("boardsDiv")) {
      return;
    }
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "boardDropzone") {
      event.target.style.background = "";
    }
  },
  false
);

document.addEventListener(
  "drop",
  function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    if (!draggedBoards.classList.contains("boardsDiv")) {
      return;
    }
    // move dragged elem to the selected drop target
    if (event.target.className == "boardDropzone") {
      event.target.style.background = "";
      draggedBoards.parentNode.removeChild(draggedBoards);
      event.target.appendChild(draggedBoards);
    }
  },
  false
);
