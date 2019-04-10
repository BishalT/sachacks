// This is navbar helper
// It will set all pages, but homepage, to display none

class NavBar {
  constructor(pages,controllBtns,rocketParent,animatedUp,animatedDown) {
    this.pages = pages;
    this.controllBtns = controllBtns;
    this.rocketParent = rocketParent;
    this.animatedUp = animatedUp;
    this.animatedDown = animatedDown;
    this.mobile = false;
    this.currPage = 0;
  }

  // initiating first page
  init() {
    resetAllPages.apply(this.pages);        
    switchPage.apply(this.pages[this.currPage]);          // switch to first page
    addActiveBtn.apply(this.controllBtns[this.currPage]); // add active class to first page
    initControllBtn.apply(this);
    moveRocket.call(this,this.controllBtns[this.currPage]);   // move rocket to first button
  }

  // switching page when navbar btn is clicked
  handleBtnClick(btn) {
    let target = btn.getAttribute('name');    // get the index of btn
    resetAllPages.apply(this.pages);          // reset pages
    removeActiveBtn.apply(this.controllBtns); // remove style on btn
    removeAnimation.apply(this);              // remove all animation effect
    moveRocket.call(this,btn);                // move rocket to btn
    changeAnimation.call(this,target);        // animate the target page
    switchPage.apply(this.pages[target])      // switch to page clicked
    addActiveBtn.apply(btn);                  // add style to btn
  }

  getCurrentPage() {
    return this.currPage;
  }

  deactivate() {
    this.pages.forEach((page) => {
      page.style.display = "block";
    });
    if (this.mobile === false) {
      let curPagePos = this.pages[this.currPage].getBoundingClientRect().top;
      window.scrollTo(0,curPagePos)
      this.mobile = true;
    }
  }

  activate() {
    if (this.mobile === false) {
      return;
    }
    this.mobile = false;
    this.init();
  }
}

function removeAnimation() {
  this.pages.forEach((pg) => {
    pg.classList.remove(`${this.animatedDown}`)
    pg.classList.remove(`${this.animatedUp}`)
  })
}

function changeAnimation(target) {
  let targetPage = Number(target);
  if (targetPage > this.currPage) {
    this.pages[targetPage].classList.add(`${this.animatedUp}`);
  } else {
    this.pages[targetPage].classList.add(`${this.animatedDown}`);
  }
  this.currPage = targetPage;
}

function moveRocket(btn) {
  let dist = getPosBtn.call(this,btn) - 30; // minus 1/2 of rocket height
  const elements = this.rocketParent.children;
  for (let i=0; i < elements.length; ++i) {
    if (elements[i].tagName === 'IMG'){
      let rocket = elements[i];
      // if it goes down, change direction of 
      if (btn.getAttribute('name') >= this.currPage) {  
        rocket.style.transform = 'rotate(180deg)';
          
      } else {
        rocket.style.transform = 'rotate(0deg)';        
      }
      rocket.style.marginTop = `${dist}px`;
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