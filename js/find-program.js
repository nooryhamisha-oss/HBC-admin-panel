const tabMap = document.getElementById("tabMap");
const tabList = document.getElementById("tabList");
const map = document.getElementById("mapView");
const list = document.getElementById("listView");

document.getElementById("year").textContent = new Date().getFullYear();

tabMap.onclick = () => {
  map.classList.remove("hide");
  list.classList.add("hide");
  tabMap.classList.add("active");
  tabList.classList.remove("active");
};

tabList.onclick = () => {
  map.classList.add("hide");
  list.classList.remove("hide");
  tabList.classList.add("active");
  tabMap.classList.remove("active");
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
