let carousel = {};

carousel.init = init;
carousel.activate = activate;

function init() {
  carousel.element = document.querySelector('.carousel');
  carousel.items = document.querySelector('.carousel .items');
  carousel.leftScroll = document.querySelector('.carousel .left');
  carousel.rightScroll = document.querySelector('.carousel .right');
  carousel.timebar = document.querySelector('.carousel .timebar');
}

function activate() {
  // make the line longer
  let width;
  if (window.innerWidth < 767) {
    width = carousel.items.scrollWidth;
  } else {
    width = carousel.items.offsetWidth;
  }

  carousel.timebar.style.width = width + 'px';
  carousel.leftScroll.addEventListener('click',handleLeftClick)
  carousel.rightScroll.addEventListener('click', handleRightClick);
}

function handleRightClick() {
  mouseWheelHandler(-100,carousel.items)
}

function handleLeftClick() {
  mouseWheelHandler(100,carousel.items)
}

function mouseWheelHandler(distance, element) {
  var delta = 0;

  if (typeof distance === 'number') {
    delta = distance;
  }
  else {
    if (distance.deltaX !== 0) {
      delta = distance.deltaX;
    }
    else {
      delta = distance.deltaY;
    }
    distance.prevenDefault();
  }

  element.scrollLeft -= (delta);
}

export default carousel;
