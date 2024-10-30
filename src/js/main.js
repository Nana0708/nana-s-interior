// ハンバーガーメニュー


// const ham = document.querySelector("js-hamburger");
// const nav = document.querySelector("js-nav");

// ham.addEventListener('click', function () { 
//     ham.classList.toggle("is-active");
//     nav.classList.toggle("is-active");
    
  
//   });
  // kv部分のスライドイン

  gsap
  .timeline()
  .from(".js_copy", {
    duration: 1.0 ,
    autoAlpha: 0,
    y: 50

  })
  .from(".js_sub-copy", {
    duration: 0.6 ,
    autoAlpha: 0,
    x: -100
  });
