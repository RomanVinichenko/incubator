$('.logo').click(function () {
    jQuery('html,body').animate({ scrollTop: 0 }, 800);
});

let button = document.querySelector(".pop");
let popUp = document.querySelector(".popup");
let cookie = document.querySelector(".cookie");
let closePopUp = document.querySelector(".popup__close");
let closeCookie = document.querySelector(".cookie__close");
let body = document.body;
const header = document.querySelector('.header');

const prevent = ev => ev.preventDefault();


if (button) {
    button.addEventListener("click", function () {
        popUp.classList.toggle("popup--active");
        event.preventDefault();
        body.style.cssText = `
        overflow-x: hidden;
        overflow-y: hidden;
        `;
        document.addEventListener('wheel', prevent, {passive: false});
    })
}

if (closePopUp) {
    closePopUp.addEventListener("click", function () {
        popUp.classList.remove("popup--active");
        body.style.cssText = `
        overflow-x: hidden;
        overflow-y: auto;
        `;
        document.removeEventListener('wheel', prevent);
    })
}

if (closeCookie) {
    closeCookie.addEventListener("click", function () {
        cookie.classList.add("cookie--inactive");
    })
}

let scrollpos = window.scrollY;


window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos >= 50) {
        addClass();
    } else {
        removeClass();
    }
});

const addClass = () => {
    if (header) {
        header.classList.add('header--active');
    }
};
const removeClass = () => {
    if (header) {
        header.classList.remove('header--active');
    }
};

// const anchors = document.querySelectorAll('a[href*="#"]')
//
// for (let anchor of anchors) {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault()
//
//         const blockID = anchor.getAttribute('href').substr(1)
//
//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
// }

$('.menu a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top -120
    }, {
        duration: 370,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });

    return false;
});