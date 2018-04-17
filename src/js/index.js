// javascript helpers
import changeBgImg from './utils/changeBgImg';
import NavBar from './utils/navbar';
import carousel from './utils/scheduleOnClick';

// scss
import 'animate.css';
import '../scss/index.scss';

// search the DOM
const wrapper = document.querySelector('.wrapper');
const pages = document.querySelectorAll('.page');
const controllBtns = document.querySelectorAll('.control-btn li');
const rocketParent = document.querySelector('.rocket');
const navbarDOM = document.querySelector('.navbar');
const headerTitle = document.querySelector('.header-title');

// instantiate navbar
const navbar = new NavBar(pages,controllBtns,rocketParent,'fadeInUp','fadeInDown');

// schedule 
carousel.init();

// set current page
let currPage = 0;

// add animation
pages.forEach((pg) => {
  pg.classList.add('animated');
})

// change background of wrapper - need to use JS because github add a '/' to the end point of url -> cant access background image
// EX: github/sachacks/ 
changeBgImg.target(wrapper);

if (window.innerWidth > 1023) {
  navbar.init();
}
if (window.innerWidth < 1023) {
  carousel.activate();
}  

window.addEventListener('resize', () => {
  if (window.innerWidth < 1023) {
    // initiate homepage
    navbar.deactivate();
    carousel.activate();
  } else {
    navbar.activate();
  }
  
  if (navbar.getCurrentPage()===2) {
    carousel.activate();
  }

});

// hide and display the sachack next to logo
navbarDOM.addEventListener('click', () => {
  currPage = navbar.getCurrentPage();
  if (currPage === 0 ) {
    headerTitle.style.display = 'none';
  } 
  else {
    headerTitle.style.display = 'block';
  }
  if (currPage === 2) {
    carousel.activate(); // activate schedule box when user click on schedule page
  } 
})