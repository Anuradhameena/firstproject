const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from("#center h1",{
    x:100,
    opacity:0,
    duration:0.8,
    delay:4,
    
    stagger:0.3
})

var elemc = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemc.addEventListener("mouseenter",function(){
     fixed.style.display = "block";
})
elemc.addEventListener("mouseleave",function(){
    fixed.style.display = "none";
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    var image = e.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
  })
})

function swiperAnimation(){
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 100,
});
}
swiperAnimation();
var loader = document.querySelector("#loader")
setTimeout(function () {
    loader.style.top = "-100%"
}, 4200)