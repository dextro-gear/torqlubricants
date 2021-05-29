var accordionItems = document.querySelectorAll(".faq-accordion-item");

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    var arrow = item.children[0].children[0];
    item.classList.toggle("collapse");
    arrow.classList.toggle("rotate");
  });
});

var hero = document.querySelector(".hero");

var lightNavbar = document.querySelector(".navbar-light");

var options = {};

var timeout;

var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      lightNavbar.classList.add("transition");
      lightNavbar.classList.remove("invisible");
      timeout = setTimeout(() => {
        lightNavbar.style.overflow = "visible";
      }, 600);
    }
    if (entry.isIntersecting) {
      clearTimeout(timeout);
      lightNavbar.classList.add("invisible");
      lightNavbar.style.overflow = "hidden";
    }
  });
}, options);

observer.observe(hero);
