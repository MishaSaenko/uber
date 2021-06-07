const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
const menuItem = document.querySelectorAll(".menu-list-item");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger-active");
  menu.classList.toggle("menu-active");
});

menuItem.forEach((item) => {
  item.addEventListener("click", function () {
    burger.classList.toggle("burger-active");
    menu.classList.toggle("menu-active");
  });
});
