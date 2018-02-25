// javascript helpers
import changeBgImg from './utils/changeBgImg';
import NavBar from './utils/navbar';

// scss
import '../scss/index.scss';

// search the DOM
let wrapper = document.querySelector('.wrapper');
let pages = document.querySelectorAll('.page');
let controllBtns = document.querySelectorAll('.control-btn li');
const rocketParent = document.querySelector('.rocket');

const navbar = new NavBar(pages,controllBtns,rocketParent);
changeBgImg.target(wrapper);

// initiate first page
navbar.init();

// add click event all all control btn
// controllBtns.forEach((btn) => {
//   btn.addEventListener('click',function(){
//     navbar.handleBtnClick(this);
//   });
// })

