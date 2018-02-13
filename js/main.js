let allSlides = document.querySelectorAll('.page');
let controllBtns = document.querySelectorAll('.control-btn li');



// initiate the sliders
startFirstSlide.apply(allSlides)

// add click event all all control btn
controllBtns.forEach((btn) => {
  btn.addEventListener('click',handleSlideMove);
})

function handleSlideMove() {
  let target = this.getAttribute('name');
  // remove and reset everything
  resetAllSlides.apply(allSlides);
  removeAllActiveClass.apply(controllBtns);
  // display right image and add active class to btn
  allSlides[target].style.display = 'block';
  addActiveStyle.apply(this);
}

function startFirstSlide() {
  resetAllSlides.apply(this);
  this[0].style.display = 'block';
  addActiveStyle.apply(controllBtns[0]);
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