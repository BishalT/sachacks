// This is navbar helper
// It will set all pages, but homepage, to display none

class NavBar {
  constructor(pages,controllBtns,rocketParent) {
    this.pages = pages;
    this.controllBtns = controllBtns;
    this.rocketParent = rocketParent;
  }

  // initiating first page
  init() {
    resetAllPages.apply(this.pages);        
    switchPage.apply(this.pages[0]);          // switch to first page
    addActiveBtn.apply(this.controllBtns[0]); // add active class to first page
    initControllBtn.apply(this);
  }

  // switching page when navbar btn is clicked
  handleBtnClick(btn) {
    let target = btn.getAttribute('name');    // get the index of btn
    moveRocket.call(this,btn);                // move rocket to btn
    resetAllPages.apply(this.pages);          // reset pages
    removeActiveBtn.apply(this.controllBtns); // remove style on btn
    switchPage.apply(this.pages[target])      // switch to page clicked
    addActiveBtn.apply(btn);                  // add style to btn
  }
}

function moveRocket(btn) {
  let dist = getPosBtn.call(this,btn) - 30; // minus 1/2 of rocket
  const elements = this.rocketParent.children;
  for (let i=0; i < elements.length; ++i) {
    if (elements[i].tagName === 'IMG'){
      elements[i].style.marginTop = `${dist}px`;
    }
  } 
  function getPosBtn(btn) {
    const posBtn = btn.getBoundingClientRect().top;
    const rocketParent = this.rocketParent.getBoundingClientRect().top;
    return posBtn - rocketParent;
  }
}

function initControllBtn() {
  this.controllBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      this.handleBtnClick(btn)
    });
  });
}

function switchPage() {
  this.style.display = 'block';
}

function resetAllPages() {
  this.forEach((slide) => {
    slide.style.display = 'none';
  })
}

function addActiveBtn() {
  this.classList.add('active');
}

function removeActiveBtn() {
  this.forEach((btn) => {
    btn.classList.remove('active');
  })
}

export default NavBar;