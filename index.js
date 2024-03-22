'use strict'

document.querySelector('.nav_links').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('hioo')
    if (e.target.classList.contains('nav_link')) {

        const id = e.target.getAttribute('href');
        console.log('hi')
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
})



/** STICKY NAV */
const navContainer = document.querySelector('.nav_links')
const navHeight = navContainer.getBoundingClientRect().height;

const obsCallback = function (entries) {

    //only 1 entry here which is threashold at 0
    const [entry] = entries;

    if (!entry.isIntersecting) {
        navContainer.classList.add('sticky');
    } else {
        navContainer.classList.remove('sticky');
    }
}
/** 90px is the height of the navigation height  */
const obsOptions = {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
}

const header = document.querySelector('header')
const headerObserver = new IntersectionObserver(obsCallback, obsOptions);
headerObserver.observe(header);





/**CAROUSAL PART */
// const carouselItems = document.querySelectorAll('.carousel-item');
// let currentIndex = 0;

// function showSlide(index) {
//     carouselItems.forEach(item => {
//         item.style.display = 'none';
//     });
//     carouselItems[index].style.display = 'block';
// }

// // 1%3 = 1 , 2%3 = 2,  3 %3 = 0
// function nextSlide() {
//     currentIndex = (currentIndex + 1) % carouselItems.length;
//     showSlide(currentIndex);
// }

// function previousSlide() {
//     currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
//     showSlide(currentIndex);
// }

// // Show the first slide initially
// showSlide(currentIndex);

// // Set up event listeners for next and previous buttons
// document.querySelector('.nextBtn').addEventListener('click', nextSlide);
// document.querySelector('.prevBtn').addEventListener('click', previousSlide);



let carouselItems = 0;
const getCarouselItems = function (id) {

    const eachId = id.split("-").at(1);

    carouselItems = document.querySelectorAll(".carousel-item-" + eachId);

}

let currentIndex = 0;
let id = "";

function showSlide(index, id) {

    getCarouselItems(id);


    carouselItems.forEach(item => {
        item.style.display = 'none';
    });
    carouselItems[index].style.display = 'block';
}


// 1%3 = 1 , 2%3 = 2,  3 %3 = 0
function nextSlide(id) {

    getCarouselItems(id);

    currentIndex = (currentIndex + 1) % carouselItems.length;

    showSlide(currentIndex, id);
}

function previousSlide(id) {

    getCarouselItems(id);

    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;

    showSlide(currentIndex, id);
}


// Show the first slide initially
const carouselOne = "carousel-one";
const carouselTwo = "carousel-two";
const carouselThree = "carousel-three";
showSlide(currentIndex, carouselOne);
showSlide(currentIndex, carouselTwo);
showSlide(currentIndex, carouselThree);

// // Set up event listeners for next and previous buttons
const nextBtnOne = document.querySelector('.nextBtn-one');
const prevBtnOne = document.querySelector('.prevBtn-one');

const nextBtnTwo = document.querySelector('.nextBtn-two');
const prevBtnTWO = document.querySelector('.prevBtn-two');

const nextBtnThree = document.querySelector('.nextBtn-three');
const prevBtnThree = document.querySelector('.prevBtn-three');


nextBtnOne.addEventListener('click', () => nextSlide(carouselOne));
prevBtnOne.addEventListener('click', () => previousSlide(carouselOne));

nextBtnTwo.addEventListener('click', () => nextSlide(carouselTwo));
prevBtnTWO.addEventListener('click', () => previousSlide(carouselTwo));

nextBtnThree.addEventListener('click', () => nextSlide(carouselThree));
prevBtnThree.addEventListener('click', () => previousSlide(carouselThree));













/** OPERATION TAB */
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations--tab-container');
const tabContent = document.querySelectorAll('.operations__content');


tabContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
    console.log(clicked);

    if (!clicked) return;

    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabContent.forEach(c => c.classList.remove('operations__content--active'));

    clicked.classList.add('operations__tab--active');
    console.log(clicked);
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
})
