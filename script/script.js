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

// ========================================

document.addEventListener("DOMContentLoaded", function () {
    function filterImages(category) {
        const imgItems = document.querySelectorAll('.img-item');
        imgItems.forEach(item => {
            const dataBlockImg = item.getAttribute('data-block-img');
                if (dataBlockImg === category || category === 'all') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
        });
    }

    const tabs = document.querySelectorAll('.tabs-img');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const category = this.getAttribute('data-block-img');
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            filterImages(category);
        });
    });
});