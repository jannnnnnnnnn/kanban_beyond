var contextMenu = CtxMenu(".taskDiv");
contextMenu.addItem("Move", moveBoard);
contextMenu.addItem("Delete", deleteFunc);

function moveBoard(e) {
  a = prompt("write the name of the column you want this column be next to:");
  a = a.toUpperCase();
  help.forEach(function (h) {
    let boardTitleName = h.innerText.toUpperCase();
    console.log(a == boardTitleName);
    if (a == boardTitleName) {
      let parent = h.parentNode;
      parent.parentNode.appendChild(e);
    }
  });
}

function deleteFunc(e) {
  e.remove();
}
