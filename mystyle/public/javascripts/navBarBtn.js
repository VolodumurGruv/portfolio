const menu = document.querySelector("#btn-menu");
const menuBtn = document.querySelector(".menu-btn");

document.querySelector(".c-gamb").addEventListener("click", function (e) {
  e.preventDefault();
  //   this.classList.toggle("is-active");
  if (this.classList.contains("is-active")) {
    this.classList.remove("is-active");
    menu.classList.remove("nav-active");
    menuBtn.classList.add("hidden");
  } else {
    this.classList.add("is-active");
    menu.classList.add("nav-active");
    menuBtn.classList.remove("hidden");
  }
});
