var header = document.querySelector(".main-header");
var button = document.querySelector(".main-header__button-menu");

header.classList.add("main-header--closed-menu");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  header.classList.toggle("main-header--closed-menu");
});
