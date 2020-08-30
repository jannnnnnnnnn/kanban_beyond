var contextMenu = CtxMenu("#ContextMenu");
contextMenu.addItem("Move", moveBoard);
function moveBoard(e) {
  a = prompt("write the name of the column you want this column be next to:");
  a = a.toUpperCase();
  console.log(e);
  console.log(help);
  help.forEach(function (h) {
    console.log(h);
    console.log("here");
    console.log(h.innerText.toUpperCase());
    let boardTitleName = h.innerText.toUpperCase();
    console.log(a == boardTitleName);
    if (a == boardTitleName) {
      console.log("true");
      let parent = h.parentNode;
      console.log(parent.parentNode.parentNode.appendChild(e));
      parent.parentNode.appendChild(e);
    }
  });

  console.log(a);
  console.log(typeof a);
}
