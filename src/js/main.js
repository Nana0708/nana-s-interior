// ********* ヘッダー　スクロール時に色変更 ********* //
document.addEventListener('DOMContentLoaded',function(){
  const header = document.querySelector('.js_header');
  const imgHeight = document.querySelector('.js_kv').offsetHeight;
  console.log
  window.addEventListener('scroll',function(){
    if(window.scrollY < imgHeight){
      header.classList.remove('js_changeColor');
    }else{
      header.classList.add('js_changeColor');
   }
  })
});

// ********* ハンバーガー開閉、スムーススクロール ********* //
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_nav");
const body = document.querySelector(".js_body");
const navigationLink = document.querySelectorAll(".js_nav a");

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("is-active");
navigation.classList.toggle("is-active");
body.classList.toggle("is-active");
});

 // ページ内リンクと外部リンクの処理を分ける
 navigationLink.forEach(link => {
  link.addEventListener("click", event => {
    const href = link.getAttribute("href");

      // ページ内リンクの場合の処理
      if (href.startsWith("#")) {
        event.preventDefault();

    // メニューを閉じる
    hamburger.classList.remove("is-active");
    navigation.classList.remove("is-active");
    body.classList.remove("is-active");

        // スムーススクロール
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          console.error("ターゲット要素が見つかりません:", href);
        }
      }
    })
  })
// 右からにょきっと出す

let isMenuOpen = false;

hamburger.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen; // 開閉状態をトグル

  if (isMenuOpen) {
    // メニューを右から表示
    gsap.fromTo(
      navigation,
      { x: "100%" }, // 初期位置：画面外
      { x: "0%", duration: 0.5, ease: "power2.out" } // 表示位置
    );
  } else {
    // メニューを右に隠す
    gsap.to(navigation, {
      x: "100%",
      duration: 0.5,
      ease: "power2.in",
    });
  }
});
  
  
  // ********* ヘッダーロゴとナビのアニメーション ********* //
    gsap.from(".js_header-logo", {
      opacity: 0,  
      y: -50,      
      duration: 1, // 1秒かけて
      ease: "power2.out",
      delay: 0.2   // ページロード後0.2秒遅延
    });
  
    // ヘッダーナビにアニメーションを追加
    gsap.from(".js_header-nav__item", {
      opacity: 0,        
      y: -30,            
      duration: 0.8,     
      ease: "power2.out", 
      stagger: 0.1,     
      delay: 0.5         
    });
  
// ********* 各ページのスライドイン ********* //
// topページ
// features
gsap.from(".js_top-features",{
  y:50,
  autoAlpha: 0,
  duration: 1,
  ease: "Power4.inOut",
  
scrollTrigger: {
  trigger: ".js_top-features__trigger",
  start: "top 80%",

},
stagger: {
  each: 0.6,
  from: "start",

},
});

// product
gsap.from(".js_top-product",{
  y:50,
  autoAlpha: 0,
  duration: 1,
  ease: "Power4.inOut",
  
scrollTrigger: {
  trigger: ".js_top-product__trigger",
  start: "top 80%",

},
stagger: {
  each: 0.6,
  from: "start",

},
});

// sub-section
gsap.from(".js_sub-section",{
  y:50,
  autoAlpha: 0,
  duration: 1,
  ease: "Power4.inOut",
  
scrollTrigger: {
  trigger: ".js_sub-section__trigger",
  start: "top 80%",
},
stagger: {
  each: 0.6,
  from: "start",
},
});

// news
gsap.from(".js_top-news",{
  y:50,
  autoAlpha: 0,
  duration: 1,
  ease: "Power4.inOut",
  
scrollTrigger: {
  trigger: ".js_top-news__trigger",
  start: "top 80%",

},
stagger: {
  each: 0.6,
  from: "start",

},
});
// gallery
gsap.from(".js_top-gallery",{
  y:50,
  autoAlpha: 0,
  duration: 1,
  ease: "Power4.inOut",
  
scrollTrigger: {
  trigger: ".js_top-gallery__trigger",
  start: "top 80%",

},
stagger: {
  each: 0.6,
  from: "start",

},
});
// faq
gsap.from(".js_top-faq",{
  y:50,
  autoAlpha: 0,
  duration: 1,
  ease: "Power4.inOut",
  
scrollTrigger: {
  trigger: ".js_top-faq__trigger",
  start: "top 80%",

},
stagger: {
  each: 0.6,
  from: "start",

},
});
// contact 
gsap.from(".js_top-contact",{
  y:50,
  autoAlpha: 0,
  duration: 1,
  ease: "Power4.inOut",
  
scrollTrigger: {
  trigger: ".js_top-contact__trigger",
  start: "top 80%",

},
stagger: {
  each: 0.6,
  from: "start",

},
});

// productページ
gsap.from(".js_product",{
  y:50,
  autoAlpha: 0,
  duration: 0.5,
  ease: "Power4.inOut",
  
scrollTrigger: {
  trigger: ".js_product__trigger",
  start: "top 80%",

},
stagger: {
  each: 0.6,
  from: "start",

},
});
// newsページ
gsap.from(".js_news",{
  y:50,
  autoAlpha: 0,
  duration: 2,
  ease: "Power4.inOut",
  
scrollTrigger: {
  trigger: ".js_news__trigger",
  start: "top 80%",

},
stagger: {
  each: 0.6,
  from: "start",

},
});

// contactページ
gsap.from(".js_contact",{
  y:50,
  autoAlpha: 0,
  duration: 1,
  ease: "Power4.inOut",
  
scrollTrigger: {
  trigger: ".js_contact__trigger",
  start: "top 80%",

},
stagger: {
  each: 0.6,
  from: "start",

},
});




// ********* top_faq アコーディオン ********* //
const faq = document.querySelectorAll(".js_faq");

faq.forEach(function(element) {
  const faqA = element.querySelector(".js_faq-a");

  element.addEventListener("click", function() {
    if (element.classList.contains("is-active")) {
      // アコーディオンを閉じるときの処理
      // アイコン操作用クラスを切り替える(クラスを取り除く)
      element.classList.toggle("is-active");
      element.querySelector(".js_faq_mark").classList.toggle("is-open");

      // アニメーション実行
      closingAnim(faqA);
    } else {
      // アコーディオンを開くときの処理
      // アイコン操作用クラスを切り替える(クラスを付与)
      element.classList.toggle("is-active");
      element.querySelector(".js_faq_mark").classList.toggle("is-open");

      // アニメーション実行
      openingAnim(faqA);
    }
  });
});

const closingAnim = function(content) {
  gsap.to(content, {
    height: 0,
    opacity: 0,
    duration: 0.4,
    ease: "Power4.inOut",
  });
};

const openingAnim = function(content) {
  gsap.fromTo(
    content, {
      height: 0,
      opacity: 0,
    }, {
      height: "auto",
      opacity: 1,
      duration: 0.4,
      ease: "Power4.inOut",
    }
  );
};

// ********* top_galleryのカルーセル ********* //
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
      1080: {
        slidesPerView: 2,
      },
    },
  });

