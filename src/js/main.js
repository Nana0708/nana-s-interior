// ハンバーガー
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_nav");
const body = document.querySelector(".js_body");

// hamburger.addEventListener("click", () => {

//   hamburger.classList.toggle("is-active");
//   navigation.classList.toggle("is-active");
//   body.classList.toggle("is-active");

// });


  // kv部分のスライドイン



  // オープニングアニメーション
  const opening = document.querySelector(".js_opening");

function OpeningAnime() {
	// bodyタグの範囲に対して.is-activeをつけ外しする（ハンバーガーで指定したoverflow:hiddenが効く）
  body.classList.toggle("is-active");

  gsap.timeline(function () {})
  .from(".js_opening-txt",{
    duration: 1.2,
    autoAlpha: 0,
    y:40,
  })

  .to(".js_opening",{
    autoAlpha: 0,
    duration: 0.6,
          //1.2秒の遅延
    delay: 1.2,
          // onComplete:アニメーションが完了したら
    onComplete: function () {
      body.classList.toggle("is-active");
    },

  })

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
};

//関数呼び出し
OpeningAnime();

// // js_featuresのスライドイン

gsap.from(".js_features", {
  y: 200,
  autoAlpha: 0,
  duration: 1,
  ease: "Power4.inOut",
  scrollTrigger: {
    trigger: ".js_features-trigger",
    start: "top center",
  
    // markers: true, ←発火するスクロール位置や終了位置をマーカーする
  },
  stagger: {
    // each: 指定した時間が経過された時に次の要素のアニメーションを開始する
    each: 0.6,
    // amount: アニメーションの総時間（eachかamountのどちらかを指定する）
    // amount: 1,
    from: "start",
    // 順番に表示する際のアニメーションスピード
    // ease: "bounce"
  },
});