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
// ************************* //
// smooth-scrolling

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //mobile nav

    if (link.classList.contains("nav-li-link"))
      headerEl.classList.toggle("nav-open");
  });
});
