/*************************/
// span current date
console.log("hello world");

const yearEl = document.querySelector(".year");

const newYear = new Date().getFullYear();
console.log(newYear);
yearEl.textContent = newYear;

/***********************/

const btnnavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnnavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
