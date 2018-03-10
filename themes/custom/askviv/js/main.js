jQuery(document).ready(function($) {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {

      $(".site-branding__slogan").addClass("hidden");
      $(".header__container").addClass("header__container-small");

    } else {

      $(".site-branding__slogan").removeClass("hidden");

      $(".header__container").removeClass("header__container-small");
    }
  });
});
