document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded achieved");

  var currentColor = '';
  var current = document.getElementsByClassName('current')[0];
  function newColor() {

    currentColor = event.target.style.backgroundColor;
    current.style.backgroundColor = currentColor;
  }
  //pixels
  var contain = document.querySelector('.container');
  for (var i = 0; i < 1504; i++) {
    var pixel = document.createElement('div');
    contain.appendChild(pixel);
    pixel.style.float = 'left';
    pixel.style.width = '15px';
    pixel.style.paddingBottom = '15px';
    pixel.style.backgroundColor = 'white';
    pixel.style.border = '1px solid rgba(160, 158, 164, 0.69)';
    pixel.addEventListener('mouseenter', paint);
    pixel.addEventListener('click', clickPaint);

  }
  // color select
  var contained = document.querySelector('.container');
  var colorCont = document.createElement('div');
  colorCont.className = 'colorCont';
  colorCont.style.margin = '0 auto';
  colorCont.style.width = '793px';
  colorCont.style.height = '100px';
  colorCont.style.backgroundColor = 'black';
  colorCont.style.border = '4px solid black';
  contained.appendChild(colorCont);

  //colors

  // var contain = document.querySelector('.container');
  var colors = ['red', 'purple', 'blue', 'black', 'green', 'white'];
  for (var j = 0; j < colors.length; j++) {
    var swatch = document.createElement('div');
    swatch.style.float = 'left';
    swatch.style.border = '3px solid white';
    swatch.style.width = '50px';
    swatch.style.height = '50px';
    swatch.style.marginLeft = '2px';
    swatch.style.borderRadius = '50%';
    // swatch.style.cursor = 'pointer';
    swatch.style.boxShadow = '8px 5px rgba(0, 0, 0, 0.3)';
    swatch.style.backgroundColor = colors[j];
    swatch.addEventListener('click', newColor);
    contain.appendChild(swatch);
    // select.addEventListener('click', brush);
  }

  //-------------------------------------------------------

  var mouseState = false;
  function clickPaint() {
      event.target.style.backgroundColor = currentColor || 'white';
  }


  function paint() {
    contain.addEventListener('mousedown', function() {
      mouseState = true;
    });
    contain.addEventListener('mouseup', function() {
      mouseState = false;
    });
    if (mouseState === true) {
      event.target.style.backgroundColor = currentColor || 'white';
    }
  }
  var body = document.getElementsByTagName('body')[0];
  var drawing = document.createElement("div");
drawing.className = 'drawing1';
body.appendChild(drawing);

});



// PsuedoCode:
//
// brush:
//
// color(rbg most likely) = currentcolor
// document.addEventListener("mousedown") --> currentcolor = div backgroundnew;
// document.addEventListener("mouseup") --> stop applying
//
// eraser:
//
// background: white --> currentColor
