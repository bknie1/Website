var navbar = $("#mainNavbar");

$( document ).ready(function() {

  if(window.innerWidth > 960) {
    $(document).on("scroll", updateNavbarBackground);
  } else {
    navbar.addClass("scrolled");
  }
});

function updateNavbarBackground() {
  navbar.toggleClass("scrolled", $(this).scrollTop() > navbar.height());
}