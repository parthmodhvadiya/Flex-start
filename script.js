$(function () {
  $(document).scroll(function () {
    var $nav = $(".sticky-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
$(".open-popup-link").magnificPopup({
  type: "inline",
  midClick: true,
  mainClass: "mfp-fade",
});
$(document).ready(function () {
  /* Check width on page load*/
  if ($(window).width() < 769) {
    $("nav ul").addClass("mfp-hide");
  } else {
  }
});

$(window).resize(function () {
  /*If browser resized, check width again */
  if ($(window).width() < 769) {
    $("nav ul").addClass("mfp-hide");
  } else {
    $("nav ul").removeClass("mfp-hide");
  }
});
AOS.init({
  offset: 400,
  duration: 1000,
});
$(".counter").counterUp({
  delay: 10,
  mirror: false,
  easing: "ease-in-out",
  time: 1000,
});
