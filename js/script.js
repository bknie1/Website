$( document ).ready(function() {
  $(document).on("scroll", updateNavbarBackground);
});

function updateNavbarBackground() {
  var navbar = $("#mainNavbar");
  navbar.toggleClass("scrolled", $(this).scrollTop() > navbar.height());
}