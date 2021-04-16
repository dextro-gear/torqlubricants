accordionLinks = document.querySelectorAll(".accordion-link");

accordionLinks.forEach(link => {
    
    link.addEventListener("click", () => {
        link.nextElementSibling.classList.toggle("collapse");
    });

});