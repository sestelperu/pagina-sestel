const swiper = new Swiper(".heroSwiper", {
  loop: true,

  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  speed: 600,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
