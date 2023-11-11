function customCursor(e) {
  var cursor = document.getElementById('customCursor');

  if (!cursor) {
    cursor = document.createElement('div');
    cursor.id = 'customCursor';
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
  }

  Object.assign(cursor.style, {
    top: e.pageY - 15 + 'px',
    left: e.pageX - 15 + 'px'
  });
}

addEventListener('mousemove', customCursor);

function trail (e) {
	var div = document.createElement('div');
  
  div.classList.add('happyTrail');
  
  Object.assign(div.style, {
    top: e.pageY - 15 + 'px',
    left: e.pageX - 15 + 'px'
  });
  
  document.body.appendChild(div);
  setTimeout(function(){document.body.removeChild(div)}, 180);
}

addEventListener('mousemove', trail);

var logo = document.getElementById('logo');
var logoContainer = document.querySelector('.logo-container');
var flash = document.querySelector('.flash');

logo.addEventListener('click', function () {
  this.classList.toggle('clicked');

  if (this.classList.contains('clicked')) {
    setTimeout(function () {
      logoContainer.style.zIndex = '999';
      flash.style.opacity = '0';
    }, 500);
  }
});

const audio = document.getElementById('Audio');

document.body.addEventListener('click', () => {
  audio.play();
});
