// this module will handle touch to switch page
const switchPageOnWheel = (function() {
  let pageIndex = 0;
  let listBtns;
  let scrollDown = true;

  const init = function(btns) {
    listBtns = btns;
    scroll = false;
    let scrolled = false;
    // delay created inbetween scroll inputs
    function debounce(event, method, delay) {
    clearTimeout(method._tId);
    method._tId= setTimeout(function(){
        method(event);
        }, delay);
    }
    window.addEventListener('mousewheel', function(event) {
        debounce(event,handleScrollDelay, 400);
    });
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
