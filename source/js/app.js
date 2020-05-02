let menuButton = document.querySelector(`.page-header__toggle`);
let mainMenu = document.querySelector(`.main-nav`);

menuButton.addEventListener(`click`, function (evt) {
    evt.preventDefault;
    mainMenu.classList.toggle(`display-none`);
})