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

document.getElementById("loadMoreBtn").addEventListener("click", function() {
    const imageList = document.getElementById("imageList");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    const newImageNames = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg", "img11.jpg", "img4.jpg"];

    newImageNames.forEach((imageName, index) => {
        const newImage = document.createElement("li");
        newImage.classList.add("img-item");
        newImage.innerHTML = `
            <img src="./images/Our Amazing Work/${imageName}">
            <div class="overlay">
                <div class="inner-img">
                    <div class="chain-square">
                        <svg class="chain" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883684 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#1FDAB5"/>
                        </svg>
                        <div class="mini-square">
                            <img src="./images/Our Amazing Work/icons/square.png">
                        </div>
                    </div>
                    <p class="crdesign">creative design</p>
                    <p class="wdesign">Web Design</p>
                </div>
            </div>
        `;
        imageList.appendChild(newImage);
    });

    loadMoreBtn.style.display = "none";
    imageList.style.marginBottom = "100px";
});

// =================SLIDER====================

const navigation = document.querySelectorAll(".user-photo-small");
const slides = document.querySelectorAll(".slider-user");
const next = document.getElementById("right-arrow");
const previous = document.getElementById("left-arrow");
let currentSlide = 0;


for (let i = 0; i < navigation.length; i++) {

    navigation[i].onclick = function () {
        currentSlide = i;
        document.querySelector(".slider-user.active").classList.remove("active");
        document.querySelector(".user-photo-small.active").classList.remove("active");
        navigation[currentSlide].classList.add("active");
        slides[currentSlide].classList.add("active");
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
    slides[currentSlide].className = "slider-user";
    navigation[currentSlide].className = "user-photo-small";
}

function showSlides() {
    slides[currentSlide].className = "slider-user active";
    navigation[currentSlide].className = "user-photo-small active";
}