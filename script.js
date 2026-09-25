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

/* NAVBAR RESPONSIVE */
const navbarToggler = document.getElementById("navbar-toggler");
const navMenu = document.getElementById("nav-menu");

navbarToggler.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  const abierto = navMenu.classList.contains("active");

  navbarToggler.setAttribute("aria-expanded", abierto);

  navbarToggler.innerHTML = abierto
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});
