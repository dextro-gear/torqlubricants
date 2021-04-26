var accordionItems = document.querySelectorAll(".faq-accordion-item");
// console.log(accordionItems);

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    var arrow = item.children[0].children[0];
    item.classList.toggle("collapse");
    arrow.classList.toggle("rotate");
  });
});

var hero = document.querySelector(".hero");
console.log(hero);

var lightNavbar = document.querySelector(".navbar-light");
console.log(lightNavbar);

var options = {};

var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      lightNavbar.classList.remove("invisible");
    } else {
      lightNavbar.classList.add("invisible");
    }
  });
}, options);

observer.observe(hero);
