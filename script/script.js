// ================Our Services================

let tabTitles = document.querySelectorAll(".tabs-title");
let tabBlocks = document.querySelectorAll(".tab-block");

tabTitles.forEach((elem) => {
    elem.addEventListener("click", function() {
        tabTitles.forEach(title => {
            title.classList.remove("active");
        });
        elem.classList.add("active");

        tabBlocks.forEach(block => {
            block.classList.remove("active");
        });
// fixed
        let dataBlock = elem.getAttribute("data-block");

        let changingBlock = document.querySelector(`.tab-block[data-block="${dataBlock}"]`);
        if (changingBlock) {
            changingBlock.classList.add("active");
        }
    });
});

// =====================Our Amazing Work===================

function filterImages(category) {
    const imgItems = document.querySelectorAll(".img-item");
    imgItems.forEach(item => {
        const dataBlockImg = item.getAttribute("data-block-img");
            if (dataBlockImg === category || category === "all") {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
    });
}

const tabs = document.querySelectorAll(".tabs-img");
tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        const category = this.getAttribute("data-block-img");
        tabs.forEach(t => t.classList.remove("active"));
        this.classList.add("active");
        filterImages(category);
    });
});

// ================ANIMATION LOAD MORE===================

function startBlinking() {
    let button = document.querySelector('.load-more');
    let blinkCount = 0;

    function blink() {
        if (blinkCount < 8) {
            button.style.backgroundColor = (blinkCount % 2 === 0) ? '#e74c3c' : '#18CFAB';
            
            blinkCount++;

            setTimeout(blink, 500);
        } else {
            button.style.transition = 'opacity 1s ease';
            button.style.opacity = '0';
        }
    }

    blink();
}

// =================SLIDER====================

const navigation = document.querySelectorAll('.user-photo-small');
const slides = document.querySelectorAll('.slider-user');
const next = document.getElementById('right-arrow');
const previous = document.getElementById('left-arrow');
let currentSlide = 0;


for (let i = 0; i < navigation.length; i++) {

    navigation[i].onclick = function () {
        currentSlide = i;
        document.querySelector('.slider-user.active').classList.remove('active');
        document.querySelector('.user-photo-small.active').classList.remove('active');
        navigation[currentSlide].classList.add('active');
        slides[currentSlide].classList.add('active');
    }
}

function nextUser() {
    goToSlide(currentSlide - 1);
}

function previousUser() {
    goToSlide(currentSlide + 1);
}

function goToSlide(n) {
    hideSlides();
    currentSlide = (n + slides.length) % slides.length;
    showSlides();
}

function hideSlides() {
    slides[currentSlide].className = 'slider-user';
    navigation[currentSlide].className = 'user-photo-small';
}

function showSlides() {
    slides[currentSlide].className = 'slider-user active';
    navigation[currentSlide].className = 'user-photo-small active';
}