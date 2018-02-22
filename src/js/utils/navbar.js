// This is navbar helper
// It will set all pages, but homepage, to display none

class NavBar {
  constructor(allSlides,controllBtns) {
    this.allSlides = allSlides;
    this.controllBtns = controllBtns;
  }
  startFirstSlide() {
    resetAllSlides.apply(this.allSlides);
    this.allSlides[0].style.display = 'block';
    addActiveStyle.apply(this.controllBtns[0]);
  }
  handleSlideMove(btn){
    let target = btn.getAttribute('name');
    // remove and reset everything
    resetAllSlides.apply(this.allSlides);
    removeAllActiveClass.apply(this.controllBtns);
    // display right image and add active class to btn
    this.allSlides[target].style.display = 'block';
    addActiveStyle.apply(btn);    
  }
}

function resetAllSlides() {
  this.forEach((slide) => {
    slide.style.display = 'none';
  })
}

function addActiveStyle() {
  this.classList.add('active');
}

function removeAllActiveClass() {
  this.forEach((btn) => {
    btn.classList.remove('active');
  })
}

export default NavBar;