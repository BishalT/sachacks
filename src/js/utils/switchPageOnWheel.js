// this module will handle touch to switch page
const switchPageOnWheel = (function() {
  let pageIndex = 0;
  let listBtns;
  let scrollDown = true;

  const init = function(btns) {
    listBtns = btns;
    scroll = false;
    let scrolled = false;
    let fired = 0;
    let isWheel;

    // 'wheel' event work for both mousewheel and trackpad
    window.addEventListener('wheel', function(event) {
      // This timer is set for trackpad
      // when user scrolls using trackpad, it will fire wheel event at least 20 times
      // when user stops scrolling, it will switch page
      clearTimeout( isWheel );

      fired ++; // count how many event fired

      isWheel = setTimeout(function() {
        callback(event,fired);
        fired = 0;
      },35)
    });

    function callback(event,fired) {
      // when user scrolls using trackpad, 'wheels' event usually fires more than 6 times
      if (fired > 6) {
        let direction = event.deltaY;
        let fakeEvent={};
        if (direction > 0) {
          fakeEvent.deltaY = 100;
        }else {
          fakeEvent.deltaY = -100;
        }
        debounce(fakeEvent,handleScrollDelay,200);
      }
      // this else statement is used for mousewheel
      else{
        debounce(event,handleScrollDelay, 400);
        fired = 0;
      }

    }
    // delay created inbetween scroll inputs
    function debounce(event, method, delay) {
      clearTimeout(method._tId);
      method._tId= setTimeout(function() {
        method(event);
      }, delay);
    }
  };

  return {
    init: init,
  }

  // handle switching page index base on direction of wheel moving
  function handleWheelMove(event) {
    if (event.deltaY > 50) {
      scrollDown = true;
      checkDirection();
    }
    else if (event.deltaY < -50) {
      scrollDown = false;
      checkDirection();
    }

    // increase/decrease page index base on direction
    function checkDirection() {
      switch (scrollDown) {
        case true:
          moveDownOnePage();
          break;

        case false:
          moveUpOnePage();
          break;
      }
    }
    function moveDownOnePage() {
      if ( pageIndex < listBtns.length - 1 ) {
        ++ pageIndex;
      } else {
        pageIndex = 0;
      }
    }
    function moveUpOnePage() {
      if ( pageIndex > 0 ) {
        -- pageIndex;
      } else {
        pageIndex = listBtns.length -1;
      }
    }
  }

  function handleScrollDelay(event){
      handleWheelMove(event);
      listBtns[pageIndex].click();
  }

})();


export default switchPageOnWheel;
