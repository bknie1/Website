document.addEventListener('DOMContentLoaded', main(), true);

function main() {
  hamburger();
  removeActive();
  document.body.style.opacity = '1'; // Fade In
  console.log('DOM fully loaded and parsed.');
}

//------------------------------------------------------------------------------
function hamburger() {
  // Hambuger Logic
  var burger = document.querySelector('.navbar-burger');
  var menu = document.querySelector('.navbar-menu');
  var brand = document.querySelector('.brand');

  burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });

  try {
    if (!burger.is.visible) {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    }

    throw 'Error: Missing hamburger property.';
  } catch (err) {}
}

//------------------------------------------------------------------------------
function removeActive() {
  var menu = document.querySelector('#navMenu');
  menu.addEventListener('click', function () {
    $('#navMenu').removeClass('is-active');
  });
}

//------------------------------------------------------------------------------
