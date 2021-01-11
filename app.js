const menu = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const toggleMenu = document.querySelector("fa-bars");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  showcase.classList.toggle("active");
});
