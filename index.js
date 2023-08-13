// Count up
$(document).ready(function () {
  $(".popup-with-zoom-anim").magnificPopup({
    type: "inline",

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: "auto",

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: "my-mfp-zoom-in",
  });
});

$(".counter").countUp();

// Scroll to top
function topFunction() {
  if (window.scrollY !== 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
window.onscroll = () => {
  document.getElementById("movetop").style.display =
    document.documentElement.scrollTop > 100 ? "block" : "none";
};

// Dark mode
function addClass(selector, className) {
  let elems = document.querySelectorAll(selector);
  elems.forEach((e) => {
    e.classList.add(className);
  });
}
function removeClass(selector, className) {
  let elems = document.querySelectorAll(selector);
  elems.forEach((e) => {
    e.classList.remove(className);
  });
}

var DARKMODE = false;
function switchDarkMode() {
  if (!DARKMODE) {
    // ON
    addClass("body", "dm-bg-dark-grey");
    addClass(".dm-bg-dg", "dm-bg-dark-grey");
    addClass(".dm-bg-lg", "dm-bg-light-grey");
    addClass(".dm-t-w", "dm-text-white");
    document.querySelector(".fa-sun").style.display = "block";
    document.querySelector(".fa-moon").style.display = "none";
    DARKMODE = true;
  } else {
    // OFF
    removeClass("body", "dm-bg-dark-grey");
    removeClass(".dm-bg-dg", "dm-bg-dark-grey");
    removeClass(".dm-bg-lg", "dm-bg-light-grey");
    removeClass(".dm-t-w", "dm-text-white");
    document.querySelector(".fa-sun").style.display = "none";
    document.querySelector(".fa-moon").style.display = "block";
    DARKMODE = false;
  }
}
