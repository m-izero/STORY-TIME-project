var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

/*const blurbacklogin = document.querySelector(".blur-backlogin"),
modalLogin = document.getElementById("show-login")

modalLogin.onclick = () =>{
  blurbacklogin.classList.add("active")
};*/


document.querySelector("#show-login").addEventListener("click",function(){
  document.querySelector(".login-box").classList.add("active");
});
document.querySelector(".login-box .close1").addEventListener("click",function(){
  document.querySelector(".login-box").classList.remove("active");
});


document.querySelector("#show-signup").addEventListener("click",function(){
  document.querySelector(".signup-box").classList.add("active");
});
document.querySelector(".signup-box .close2").addEventListener("click",function(){
  document.querySelector(".signup-box").classList.remove("active");
});

document.querySelector("#show-signup2").addEventListener("click",function(){
  document.querySelector(".signup-box").classList.add("active");
});
document.querySelector(".signup-box .close2").addEventListener("click",function(){
  document.querySelector(".signup-box").classList.remove("active");
});

document.querySelector("#show-signup3").addEventListener("click",function(){
  document.querySelector(".signup-box").classList.add("active");
});
document.querySelector(".signup-box .close2").addEventListener("click",function(){
  document.querySelector(".signup-box").classList.remove("active");
});

document.querySelector("#show-signup4").addEventListener("click",function(){
  document.querySelector(".signup-box").classList.add("active");
});
document.querySelector(".signup-box .close2").addEventListener("click",function(){
  document.querySelector(".signup-box").classList.remove("active");
});

document.querySelector("#show-signup5").addEventListener("click",function(){
  document.querySelector(".signup-box").classList.add("active");
});
document.querySelector(".signup-box .close2").addEventListener("click",function(){
  document.querySelector(".signup-box").classList.remove("active");
});

document.querySelector("#show-login2").addEventListener("click",function(){
  document.querySelector(".login-box").classList.add("active");
});
document.querySelector(".login-box .close1").addEventListener("click",function(){
  document.querySelector(".login-box").classList.remove("active");
});

document.querySelector("#show-signup6").addEventListener("click",function(){
  document.querySelector(".signup-box").classList.add("active");
});
document.querySelector(".signup-box .close2").addEventListener("click",function(){
  document.querySelector(".signup-box").classList.remove("active");
});

ScrollReveal({ 
  reset: true,
  distance: '60px',
  duration: 1500,
  delay: 400
});
ScrollReveal().reveal('.joined-how', { delay: 300, origin: 'button'});


