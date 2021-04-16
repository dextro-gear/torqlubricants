var accordionItems = document.querySelectorAll(".faq-accordion-item");
// console.log(accordionItems);

accordionItems.forEach(item => {
    item.addEventListener("click", () => {
        var arrow = item.children[0].children[0];
        item.classList.toggle("collapse");
        arrow.classList.toggle("rotate");
    })
});