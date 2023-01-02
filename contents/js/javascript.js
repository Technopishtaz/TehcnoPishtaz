let TopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        TopBtn.style.animation = "fadeInForScroll 0.5s ease";
        TopBtn.style.pointerEvents = "all";
        TopBtn.style.display = "block";
    } else {
        TopBtn.style.animation = "fadeOutForScroll 0.5s ease forwards";
        TopBtn.style.pointerEvents = "none";
    }
   
}


let header = document.getElementsByClassName("header")[0];
let headerRight = document.getElementsByClassName("header-right")[0];
window.onscroll = function() {stickyNav()};
function stickyNav() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.style.top = "-12%"
    } else {
        header.style.top = "0%"
    }
   
}

function topFunction() {
    window.scrollTo({top: 0, behavior: "smooth"});
}
function goBot(num) {
    window.scrollTo({top: num, behavior: "smooth"});
}

function loadAbout() {
    var load = document.querySelectorAll(".box-about")
    for (var i = 0; i < load.length; i++) {
        var height = window.innerHeight;
        var top = load[i].getBoundingClientRect().top;
        var reverse = 100;
        if (top < height - reverse) {
            load[i].classList.add("start-about");
        } else {
            load[i].classList.remove("start-about");
        }
    }
}
window.addEventListener("scroll", loadAbout);

function loadMain() {
    var load = document.querySelectorAll(".box")
    for (var i = 0; i < load.length; i++) {
        var height = window.innerHeight - (-200);
        var top = load[i].getBoundingClientRect().top;
        var reverse = 250;
        if (top < height - reverse) {
            load[i].classList.add("start-main");
        } else {
            load[i].classList.remove("start-main");
        }
    }
}
window.addEventListener("scroll", loadMain);


let constrain = 600;
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.getElementById("ex1-layer");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  
  return "perspective(100px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(el, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);
  window.requestAnimationFrame(function(){
      transformElement(ex1Layer, position);
    });
};

function blurOut(x) {
    const hero = document.getElementById("ex1");
    if (x == 1) {
        hero.style.filter = "blur(10px)";
    }
    if (x == 2) {
        hero.style.filter = "blur(0px)";
    }
}


