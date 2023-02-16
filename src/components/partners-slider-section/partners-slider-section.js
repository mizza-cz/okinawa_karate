$(".c-partners-slider-section__inner").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 681,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});
