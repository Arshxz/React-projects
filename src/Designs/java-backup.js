// ----------------------CURSOR----------------------
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links a");
let portfolio = document.querySelector(".introduction");
let title = document.querySelector(".title");
let scrollProgress = document.querySelector(".progress-wrap");
let bottomBorder = document.querySelector(".border-bottom");
let more = document.querySelector(".more");
let text = document.querySelector(".text");
let parallaxBox1 = document.querySelector(".parallaxbox1");
let parallaxBox2 = document.querySelector(".parallaxbox2");
let parallaxBox3 = document.querySelector(".parallaxbox3");
let contactLine = document.querySelector(".contact_line");
let presentation = document.querySelector(".presentation1");
let presentation2 = document.querySelector(".presentation2");
let h3 = document.querySelector(".h3");
let h4 = document.querySelector(".h4");
let svgWrap = document.querySelector(".svg_wrap");
let typeItemBase = document.querySelector(".type-item-base");
let logoExtruded = document.getElementById("logo_extruded");

window.addEventListener("mousemove", function (e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.classList.add("cursor-fixed");
});
window.addEventListener("mousewheel", function (e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.classList.add("cursor-fixed");
});

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow-1x");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow-1x");
  });
});
//--------
portfolio.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow-6x");
  more.classList.remove("hide-more");
});
portfolio.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow-6x");
  more.classList.add("hide-more");
});
//--------
title.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow-2x");
});
title.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow-2x");
});
//--------
scrollProgress.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow-2x-black");
});
scrollProgress.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow-2x-black");
});
contactLine.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow-2x");
});
contactLine.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow-2x");
});
//----------------------------------------------
svgWrap.addEventListener("mouseleave", () => {
  logoExtruded.classList.remove("what-we-do-fill");
  text.classList.remove("text-show");
  parallaxBox1.classList.remove("hide-parallax");
  parallaxBox2.classList.remove("hide-parallax");
  parallaxBox3.classList.remove("hide-parallax");
});
svgWrap.addEventListener("mouseover", () => {
  logoExtruded.classList.add("what-we-do-fill");
  text.classList.add("text-show");
  parallaxBox1.classList.add("hide-parallax");
  parallaxBox2.classList.add("hide-parallax");
  parallaxBox3.classList.add("hide-parallax");
});
//------------------------------------------
text.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow-2x");
});
text.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow-2x");
});
logoExtruded.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow-2x");
});
logoExtruded.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow-2x");
});
presentation.addEventListener("mouseover", () => {
  h3.classList.add("h3-center");
});
presentation.addEventListener("mouseover", () => {
  h4.classList.add("h3-center");
});
// --------------------END OF CURSOR-----------------------
// ---------------------SCROLL PARALLAX--------------------
function paralla(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateX(${distance * speed}px)`;
}

window.addEventListener("scroll", function () {
  paralla(".parallax1", window.scrollY, 0.3);
  paralla(".parallax2", window.scrollY, 0.3);
  paralla(".parallax3", window.scrollY, 0.3);
});
//--------------END OF SCROLL PARALLAX--------------------
// contact us-----------------------
setTimeout(function () {
  $(".contact_line_wrap").css(
    "width",
    2 * $(".contact_line_inner").outerWidth() + 10
  );
}, 50);
//-------------------------------------
//----------------------------------PARALLAX-----------------------------------------
presentation.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX*speed) / 100
    const y = (window.innerHeight - e.pageY*speed) / 100

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}
// document.addEventListener("mousemove", parall);
// function parall(e) {
//   this.querySelectorAll('.polygon').forEach(layer => {
//     const speed = layer.getAttribute('data-speed')

//     let x = (window.innerWidth - e.pageX*speed) / 100
//     let y = (window.innerHeight - e.pageY*speed) / 100

//     layer.style.transform = `translateX(${x}px) translateY(${y}px)`
//   })
// }
//----------------------------END OF PARALLAX-----------------------------------------