$('.logo').click(function () {
    jQuery('html,body').animate({ scrollTop: 0 }, 800);
});

let button = document.querySelector(".pop");
let popUp = document.querySelector(".popup");
let cookie = document.querySelector(".cookie");
let closePopUp = document.querySelector(".popup__close");
let closeCookie = document.querySelector(".cookie__close");
let body = document.body;
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