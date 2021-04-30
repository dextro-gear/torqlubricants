accordionLinks = document.querySelectorAll(".accordion-link");

accordionLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.nextElementSibling.classList.toggle("collapse");
    var icons = link.querySelectorAll(".iconify");
    icons.forEach((icon) => {
      icon.classList.toggle("hidden");
    });
  });
});
