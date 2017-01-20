
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  console.log(e.keyCode, e.key);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing'); //adds the style, using the class playing
  audio.currentTime = 0;  //allows to play the audio even if it was already playing
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


// add playing for click event, for mobile experience
$('#a').on('click', function(){
  const bit = document.querySelector(`audio[data-key="65"]`);
  const tone = document.querySelector(`div[data-key="65"]`);
  if (!bit) return;
  tone.classList.add('playing');
  bit.currentTime = 0;
  bit.play();
});

$('#s').on('click', function(){
  const bit = document.querySelector(`audio[data-key="83"]`);
  const tone = document.querySelector(`div[data-key="83"]`);
  if (!bit) return;
  tone.classList.add('playing');
  bit.currentTime = 0;
  bit.play();
});

$('#d').on('click', function(){
  const bit = document.querySelector(`audio[data-key="68"]`);
  const tone = document.querySelector(`div[data-key="68"]`);
  if (!bit) return;
  tone.classList.add('playing');
  bit.currentTime = 0;
  bit.play();
});

$('#f').on('click', function(){
  const bit = document.querySelector(`audio[data-key="70"]`);
  const tone = document.querySelector(`div[data-key="70"]`);
  if (!bit) return;
  tone.classList.add('playing');
  bit.currentTime = 0;
  bit.play();
});

$('#g').on('click', function(){
  const bit = document.querySelector(`audio[data-key="71"]`);
  const tone = document.querySelector(`div[data-key="71"]`);
  if (!bit) return;
  tone.classList.add('playing');
  bit.currentTime = 0;
  bit.play();
});

$('#h').on('click', function(){
  const bit = document.querySelector(`audio[data-key="72"]`);
  const tone = document.querySelector(`div[data-key="72"]`);
  if (!bit) return;
  tone.classList.add('playing');
  bit.currentTime = 0;
  bit.play();
});

$('#j').on('click', function(){
  const bit = document.querySelector(`audio[data-key="74"]`);
  const tone = document.querySelector(`div[data-key="74"]`);
  if (!bit) return;
  tone.classList.add('playing');
  bit.currentTime = 0;
  bit.play();
});

$('#k').on('click', function(){
  const bit = document.querySelector(`audio[data-key="75"]`);
  const tone = document.querySelector(`div[data-key="75"]`);
  if (!bit) return;
  tone.classList.add('playing');
  bit.currentTime = 0;
  bit.play();
});

$('#l').on('click', function(){
  const bit = document.querySelector(`audio[data-key="76"]`);
  const tone = document.querySelector(`div[data-key="76"]`);
  if (!bit) return;
  tone.classList.add('playing');
  bit.currentTime = 0;
  bit.play();
});