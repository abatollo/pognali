let menuButton = document.querySelector(`.page-header__toggle`);
let mainMenu = document.querySelector(`.main-nav`);

mainMenu.classList.add('main-nav--hidden');

menuButton.addEventListener(`click`, function (evt) {
    evt.preventDefault;
    mainMenu.classList.add('main-nav--hidden');
})
