let onoff = document.getElementById("onoff");
onoff.addEventListener("click", onoffFunc);
let taskText = document.querySelectorAll(".taskText");
let boards = document.querySelectorAll(".boards");

let help = document.querySelectorAll(".help");
// hide
let tooltiptext = document.querySelectorAll(".tooltipText");
// show
// document.getElementById("tooltiptext").style.display = "block";

function onoffFunc() {
  currentvalue = onoff.value;
  if (currentvalue == "Off") {
    taskText.forEach(function (b) {
      boards.forEach(function (bb) {
        bb.style.minWidth = "200px";
        b.style.minWidth = "135px";
      });
    });
    help.forEach(function (h) {
      h.classList.add("tooltipHelp");
      h.style.display = "block";
      console.log(h);
    });
    tooltiptext.forEach(function (t) {
      t.style.display = "block";
    });
    return (onoff.value = "On");
  } else {
    help.forEach(function (h) {
      h.classList.remove("tooltipHelp");
    });
    tooltiptext.forEach(function (t) {
      t.style.display = "none";
    });
    return (onoff.value = "Off");
  }
}
