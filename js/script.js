burgerTime();

function burgerTime() {
  // Hambuger Logic
  var burger = document.querySelector('.navbar-burger');
  var menu = document.querySelector('.navbar-menu');
  burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });

  if (!burger.is.visible) {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  }
}
