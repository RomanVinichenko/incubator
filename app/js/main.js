$(".logo").click(function () {
  jQuery("html,body").animate({scrollTop: 0}, 800);
});

// let button = document.querySelector(".pop");
// let popUp = document.querySelector(".popup");
let cookie = document.querySelector(".cookie");
// let closePopUp = document.querySelector(".popup__close");
let closeCookie = document.querySelector(".cookie__close");
const header = document.querySelector(".header");
const burger = document.querySelector(".menu__burger")
const menuMobile = document.querySelector(".menu__mobile")
const body = document.body

if (burger) {
  burger.addEventListener("click", function () {
    menuMobile.classList.toggle("menu__mobile--active");
    burger.classList.toggle("menu__burger--active");
    body.classList.toggle('body--noscroll')
  })
}

// const prevent = ev => ev.preventDefault();


// if (button) {
//   button.addEventListener("click", function () {
//     popUp.classList.toggle("popup--active");
//     event.preventDefault();
//     body.style.cssText = `
//         overflow-x: hidden;
//         overflow-y: hidden;
//         `;
//     document.addEventListener("wheel", prevent, {passive: false});
//   })
// }
//
// if (closePopUp) {
//   closePopUp.addEventListener("click", function () {
//     popUp.classList.remove("popup--active");
//     body.style.cssText = `
//         overflow-x: hidden;
//         overflow-y: auto;
//         `;
//     document.removeEventListener("wheel", prevent);
//   })
// }

if (closeCookie) {
  closeCookie.addEventListener("click", function () {
    cookie.classList.add("cookie--inactive");
  })
}

let scrollpos = window.scrollY;


window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= 50) {
    addClass();
  } else {
    removeClass();
  }
});

const addClass = () => {
  if (header) {
    header.classList.add("header--active");
  }
};
const removeClass = () => {
  if (header) {
    header.classList.remove("header--active");
  }
};

$(".menu a, .mission a").on("click", function () {

  let href = $(this).attr("href");

  $("html, body").animate({
    scrollTop: $(href).offset().top - 120
  }, {
    duration: 370,   // по умолчанию «400»
    easing: "linear" // по умолчанию «swing»
  });

  return false;
});
$(".menu__list a").on("click", function () {
  $('.menu__mobile').removeClass('menu__mobile--active');
});

$(".get__slider").slick({
  slidesToScroll: 1,
  loop: false,
  infinite: true,
  slidesToShow: 5,
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 999,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});