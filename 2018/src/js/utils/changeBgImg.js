const path2Img = 'images/bg_star_3.jpg';
const changeBgImg = {
  target: function(target) {
    if (!target) {
      return console.error('There is not target to change background');
    } 
    else {
      target.style.backgroundImage = `url(${path2Img})`;
    }
  }
}

export default changeBgImg;