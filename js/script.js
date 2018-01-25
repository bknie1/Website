hamburger();
removeActive();

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

$(".site-container").css("margin-top", $(window).height() - $(".site-header").height());

var icon = $(".home-sec-1-text");
var $window = $(window);

$window.scroll(function () {
    var windowTop = $window.scrollTop();
    var headerOffset = $(".site-header").offset().top;

    if (windowTop >= headerOffset) {
        icon.fadeTo('slow', 1);
    }
});
