const current = document.getElementById("btnCurrent");
const search = document.getElementById("btnSearch");
const home = document.getElementById("homeContent");
const result = document.getElementById("resultContent");
const mapTab = document.getElementById("tabMap");
const listTab = document.getElementById("tabList");
const map = document.getElementById("mapView");
const list = document.getElementById("listView");

document.getElementById("year").textContent = new Date().getFullYear();

function showResults() {
  home.classList.add("hide");
  result.classList.remove("hide");
  map.classList.remove("hide");
  list.classList.add("hide");
  mapTab.classList.add("active");
  listTab.classList.remove("active");
}

current.onclick = showResults;
search.onclick = showResults;

mapTab.onclick = () => {
  map.classList.remove("hide");
  list.classList.add("hide");
  mapTab.classList.add("active");
  listTab.classList.remove("active");
};

listTab.onclick = () => {
  map.classList.add("hide");
  list.classList.remove("hide");
  listTab.classList.add("active");
  mapTab.classList.remove("active");
};

const mapButtons = document.querySelectorAll(".map-button");

mapButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    mapButtons.forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");
  });
});
