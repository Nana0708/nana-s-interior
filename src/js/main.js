const swiper = new Swiper(".js_success-swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1088: {
        slidesPerView: 2,
      },
    },
  });