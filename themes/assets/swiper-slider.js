const mvSwiper = new Swiper('.mv-swiper', {
  // Optional parameters
  loop: true,
  effect: 'fade',
  slidesPerView: 1,
  spaceBetween: 0,

  autoplay: {
      delay: 4000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});