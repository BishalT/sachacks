// this module will handle touch to switch page

const switchPageOnWheel = (function() {
  let pageIndex = 0;
  let listBtns;
  let scrollDown = true;

  const init = function(btns,cb) {
    listBtns = btns;
    scroll = false;
    let scrolled = false;
    window.addEventListener('mousewheel', (event) =>{
      handleWheelMove(event);
      cb(listBtns[pageIndex]);
    })
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



})();



export default switchPageOnWheel;