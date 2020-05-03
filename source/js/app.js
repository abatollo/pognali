let menuButton = document.querySelector(`.page-header__toggle`);
let mainMenu = document.querySelector(`.main-nav`);

mainMenu.classList.add("main-nav--hidden");

menuButton.addEventListener(`click`, function (evt) {
  evt.preventDefault;
  if (mainMenu.classList.contains(`main-nav--hidden`)) {
    mainMenu.classList.remove(`main-nav--hidden`);
  } else {
    mainMenu.classList.add(`main-nav--hidden`);
  }
});
