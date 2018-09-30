// javascript helpers
// import changeBgImg from './utils/changeBgImg';
// import NavBar from './utils/navbar';
// import carousel from './utils/scheduleOnClick';
// import switchOnWheel from './utils/switchPageOnWheel';

// scss
import 'animate.css';
import '../scss/index.scss';

// search the DOM
// const wrapper = document.querySelector('.wrapper');
// const pages = document.querySelectorAll('.page');
// const controllBtns = document.querySelectorAll('.control-btn li');
// const rocketParent = document.querySelector('.rocket');
// const headerTitle = document.querySelector('.header-title');

const navbarDOM = document.querySelector('.navbar');
const hiddenMenu = document.querySelector('.icon');
const homepageDOM = document.querySelector('.homepage');
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const table1 = document.querySelector('.tb-1');
const table2 = document.querySelector('.tb-2');

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// schedule changing
btn1.addEventListener('click', () => {
    if(table1.classList.contains("tb-inactive")) {
        tb_switch_active(btn1, table1);
        tb_switch_inactive(btn2, table2);
    }
});

btn2.addEventListener('click', () => {
    if(table2.classList.contains("tb-inactive")) {
        tb_switch_active(btn2, table2);
        tb_switch_inactive(btn1, table1);
    }
});

function tb_switch_active(btn, table){
    table.classList.add("tb-active");
    table.classList.remove("tb-inactive");
    btn.classList.add("btn-active");
    btn.classList.remove("btn-inactive");
}
function tb_switch_inactive(btn, table){
    table.classList.add("tb-inactive");
    table.classList.remove("tb-active");
    btn.classList.add("btn-inactive");
    btn.classList.remove("btn-active");
}

// hiddenMenu.addEventListener('click', () => {
//     var x = document.getElementById("control-btns");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
// });
//
// // instantiate navbar
// const navbar = new NavBar(pages,controllBtns,rocketParent,'fadeInUp','fadeInDown');
//
// // scroll wheel
// switchOnWheel.init(controllBtns);
//
// // schedule
// carousel.init();
//
// // set current page
// let currPage = 0;
//
// // add animation
// pages.forEach((pg) => {
//   pg.classList.add('animated');
// })
//
// // change background of wrapper - need to use JS because github add a '/' to the end point of url -> cant access background image
// // EX: github/sachacks/
// changeBgImg.target(wrapper);
//
// if (window.innerWidth > 1023) {
//   navbar.init();
// } else {
//   carousel.activate();
// }
//
// window.addEventListener('resize', () => {
//   if (window.innerWidth < 1023) {
//     // initiate homepage
//     navbar.deactivate();
//     carousel.activate();
//   } else {
//     navbar.activate();
//   }
//
//   if (navbar.getCurrentPage()===2) {
//     carousel.activate();
//   }
//
// });
//
// // hide and display the sachack next to logo
// navbarDOM.addEventListener('click', () => {
//   currPage = navbar.getCurrentPage();
//   if (currPage === 0 ) {
//     headerTitle.style.display = 'none';
//   }
//   else {
//     headerTitle.style.display = 'block';
//   }
//   if (currPage === 2) {
//     carousel.activate(); // activate schedule box when user click on schedule page
//   }
// })
