jQuery(document).ready(function($) {

  var is_mobile = false;

  if( $('#smartphone-detected').css('display')=='none') {
    is_mobile = true;
  }

  if ( is_mobile == false ){
    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {

        $(".site-branding__slogan").addClass("hidden");
        $(".header__container").addClass("header__container-small");

      } else {

        $(".site-branding__slogan").removeClass("hidden");

        $(".header__container").removeClass("header__container-small");
      }
    });

    let paralaxImg = $('.image-style-full-page-width')[0];

    if(paralaxImg){
      $('.images-full-width > div > div > div').parallax({
        imageSrc: paralaxImg.src,
        zIndex: 100,
      });

      $('.image-style-full-page-width')[0].style.opacity = '0';
    }
  }
});
