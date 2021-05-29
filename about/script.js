var hero = document.querySelector(".hero");

var lightNavbar = document.querySelector(".navbar-light");

var options = {};
var timeout;

var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      lightNavbar.classList.add("transition");
      lightNavbar.classList.add("visible");
      timeout = setTimeout(() => {
        lightNavbar.style.overflow = "visible";
      }, 600);
    } else {
      clearTimeout(timeout);
      lightNavbar.classList.remove("visible");
      lightNavbar.style.overflow = "hidden";
    }
  });
}, options);

observer.observe(hero);
