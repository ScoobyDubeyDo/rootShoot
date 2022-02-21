document.querySelector(".filter-footer-btns").addEventListener("click", () => {
    document.querySelector(".filter-box").classList.add("filter-box-show");
});

document.querySelector("#apply-filter").addEventListener("click", () => {
    document.querySelector(".filter-box").classList.remove("filter-box-show");
});
