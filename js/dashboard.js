document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const closeSidebar = document.getElementById("closeSidebar");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  function openMenu() {
    sidebar.classList.add("open");
    overlay.classList.add("show");
  }

  function closeMenu() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  }

  menuToggle.addEventListener("click", openMenu);
  closeSidebar.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  document.getElementById("year").textContent = new Date().getFullYear();
});
