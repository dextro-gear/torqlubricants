var hero = document.querySelector(".hero");
console.log(hero);

var lightNavbar = document.querySelector(".navbar-light");
console.log(lightNavbar);

var options = {};

var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      lightNavbar.classList.add("visible");
    } else {
      lightNavbar.classList.remove("visible");
    }
  });
}, options);

observer.observe(hero);
