
const second_grid_container = document.getElementById("second-canvas-grid-container");
const second_canvas = document.getElementById("second-canvas");
const pf = document.getElementById("glass-about-container");
const pd = document.getElementById("second-canvas");
const arrow_down = document.getElementById("page_down");

console.log(Boolean(pf) + "1");
console.log(Boolean(pd) + "1");
console.log(Boolean(second_canvas) + "1");
console.log(Boolean(arrow_down) + "1");

function pageUp() {
  console.log("up");

  arrow_down.style.animation = "arrow_appear 2s forwards";
  second_canvas.style.zIndex = "100";
  second_canvas.style.opacity = "1";
  second_canvas.style.animation = "slide_up 1s forwards"
  second_grid_container.style.animation = "container_slide_up 3s forwards"
};

function pageDown() {
  console.log("down");

  arrow_down.style.animation = "arrow_disappear .5s forwards";
  second_canvas.style.animation = "slide_down 1s forwards";
  second_grid_container.style.animation = "container_slide_down .5s forwards"
};
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//       }
//     });
//   });
  
//   const hiddenElements = document.querySelectorAll(".hidden");
//   hiddenElements.forEach((el) => observer.observe(el));
// window.onload = function () {
