// javascript helpers
import changeBgImg from './utils/changeBgImg';
import NavBar from './utils/navbar';
// import switchPageOnWheel from './utils/switchPageOnWheel';

// scss
import '../scss/index.scss';

// search the DOM
const wrapper = document.querySelector('.wrapper');
const pages = document.querySelectorAll('.page');
const controllBtns = document.querySelectorAll('.control-btn li');
const rocketParent = document.querySelector('.rocket');

// instantiate navbar
const navbar = new NavBar(pages,controllBtns,rocketParent);
let pageNum = 0;



// change background of wrapper - need to use JS because github add a '/' to the end point of url -> cant access background image
// EX: github/sachacks/ 
changeBgImg.target(wrapper);

if (window.innerWidth > 1023) {
  // initiate homepage
  navbar.init();
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 1023) {
    // initiate homepage
    navbar.init();
  }
})