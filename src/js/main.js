const swiper = new Swiper(".js_success-swiper", {
    loop: true,
    autoplay: {
        delay: 3000, // スライド間の待ち時間（ミリ秒）
        disableOnInteraction: false, // ユーザー操作後も自動再生を継続するか
      },
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