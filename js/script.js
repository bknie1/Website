hamburger();
dropdown();

function hamburger() {
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

function dropdown() {
  var projectDropdown = document.querySelectorAll('projectDropdown');
  // var projectItems = document.querySelectorAll('projectItems');
  // projectItems.classList.toggle('active-dropdown');
  projectDropdown.addEventListener('mouseover', function () {
      projectDropdown.classList.toggle('is-active');
    });
}
