const toggleBtn = document.querySelector(".nav_toggleBtn");
const menu = document.querySelector(".nav_menu");
const links = document.querySelector(".nav_links");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  links.classList.toggle("active");
});
