let onoff = document.getElementById("onoff");
onoff.addEventListener("click", onoffFunc);
let help = document.querySelectorAll(".help");
// hide
let tooltiptext = document.querySelectorAll(".tooltipText");
// show
// document.getElementById("tooltiptext").style.display = "block";

function onoffFunc() {
  currentvalue = onoff.value;
  if (currentvalue == "Off") {
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
