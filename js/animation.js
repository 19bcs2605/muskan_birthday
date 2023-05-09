window.onload = function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 2,
  });
};
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
