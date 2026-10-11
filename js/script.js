const menuToggle =document.getElementById('menu-toggle');
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    menuToggle.checked =false;
  });
});

// 画面中央から開く
const loadingAreaLeft = document.querySelector('#loading-left');
const loadingAreaRight = document.querySelector('#loading-right');
const keyframes = {
  transform: ['scalex(1)', 'scalex(0)'],
};
const options = {
  duration: 1000,
  easing: 'ease',
  fill: 'forwards',
};
window.addEventListener('load', () => {
  loadingAreaLeft.animate(keyframes, options);
  loadingAreaRight.animate(keyframes, options);
});