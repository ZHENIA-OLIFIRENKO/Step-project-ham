let tabTitle = document.querySelectorAll(".tabs-title");

let tabBlock = function () {
    tabTitle.forEach(elem => {
        elem.addEventListener("click", selectTabTitle);
    });

    function selectTabTitle() {
        tabTitle.forEach(elem => {
        elem.classList.remove("active");
    });
    this.classList.add("active");
    }
};
tabBlock();