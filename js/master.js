$(document).ready(function () {

  
  // close menu
  $(".close_menu").click(function () {
    $(".menu_list").hide(300);
    $(".close_menu").css("display", "none");
    $(".open_menu").css("display", "block");
  });
  // open menu
  $(".open_menu").click(function () {
    $(".menu_list").css("display", "flex");
    $(".open_menu").css("display", "none");
    $(".close_menu").css("display", "block");
  });
  $('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    lazyLoad:true,
    responsive:{
      0:{
        items:1
      },
      688:{
        items:2
      }
    }
  })
});
