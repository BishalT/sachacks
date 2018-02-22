// javascript helpers
import changeBgImg from './utils/changeBgImg';
import NavBar from './utils/navbar';

// scss
import '../scss/index.scss';

// search the DOM
let wrapper = document.querySelector('.wrapper');
let allSlides = document.querySelectorAll('.page');
let controllBtns = document.querySelectorAll('.control-btn li');

changeBgImg.target(wrapper);


const navbar = new NavBar(allSlides,controllBtns);

// initiate the sliders
navbar.startFirstSlide();

// add click event all all control btn
controllBtns.forEach((btn) => {
  btn.addEventListener('click',function(){
    navbar.handleSlideMove(this);
  });
})

