var contextMenu = CtxMenu(".taskDiv");
contextMenu.addItem("Move", moveBoard);
contextMenu.addItem("Delete", deleteFunc);
function moveBoard(e) {
  let count = 0;
<<<<<<< HEAD

=======
>>>>>>> 09ccd6837a1a94e67945541fdceca94184db55ba
  a = prompt("write the name of the column you want this task be in it:");
  a = a.toUpperCase();
  help.forEach(function (h) {
    let boardTitleName = h.innerText.toUpperCase();
    console.log(a == boardTitleName);
    if (a == boardTitleName) {
      count++;
      let parent = h.parentNode;
      parent.parentNode.appendChild(e);
    }
  });
  if (count == 0) {
    alert(
      "Make sure you are writing the correct name, if the name includes :/;,! ... make sure to write them as well"
    );
  }
}

function deleteFunc(e) {
  e.remove();
}
