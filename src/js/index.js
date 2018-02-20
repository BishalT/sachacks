// javascript helpers
import NavBar from './utils/navbar';

// scss
import '../scss/index.scss';


let allSlides = document.querySelectorAll('.page');
let controllBtns = document.querySelectorAll('.control-btn li');

const navbar = new NavBar(allSlides,controllBtns);

// initiate the sliders
navbar.startFirstSlide();

// add click event all all control btn
controllBtns.forEach((btn) => {
  btn.addEventListener('click',function(){
    navbar.handleSlideMove(this);
  });
})

