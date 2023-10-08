document.addEventListener("DOMContentLoaded", function() {
    let tabTitles = document.querySelectorAll(".tabs-title");
    let tabBlocks = document.querySelectorAll(".tab-block");

    tabTitles.forEach((elem, index) => {
        elem.addEventListener("click", function() {
            tabTitles.forEach(title => {
                title.classList.remove("active");
            });

            elem.classList.add("active");

            tabBlocks.forEach(block => {
                block.classList.remove("active");
            });

            tabBlocks[index].classList.add("active");
        });
    });
});

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