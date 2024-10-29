//hamburger

const ham = document.querySelector("js-hamburger");
const nav = document.querySelector("js-nav");

ham.addEventListener('click', function () { 
    ham.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    
  
  });