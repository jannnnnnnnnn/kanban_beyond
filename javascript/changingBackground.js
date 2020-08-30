var defaultImage = "http://...";
document.getElementsByTagName(
  "body"
)[0].style.backgroundImage = localStorage.getItem("back")
  ? "url('" + localStorage.getItem("back") + "')"
  : "url('" + defaultImage + "')";
function changebackground() {
  var url = document.getElementById("bgchanger").value;
  document.getElementsByTagName("body")[0].style.backgroundImage =
    "url('" + url + "')";

  document.getElementsByTagName("body")[0].style.backgroundRepeat = "no-repeat";
  document.getElementsByTagName("body")[0].style.backgroundSize = "cover";
  document.getElementsByTagName("body")[0].style.backgroundPosition = "center";

  console.log("url('" + url + "')");
  localStorage.setItem("back", url);
}
