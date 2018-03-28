// Animate opacity.
(function(){
  const opacity = document.getElementById('opacity');
  const obj = {opacity: 0};
  const tween = new AFRAME.TWEEN.Tween(obj)
    .to({ opacity: 1 }, 500)
    .repeat(Infinity)
    .yoyo(true)
    .onUpdate(() => {
      opacity.setAttribute('text', 'opacity', obj.opacity);
    })
    .start();
}());

// Animate color.
(function(){
  const color = document.getElementById('color');
  setInterval(() => {
    const randomHexColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    color.setAttribute('text', 'color', randomHexColor);
  }, 1000);
}());


// Animate size.
(function(){
  const size = document.getElementById('size');
  const objsize = {scale: 60};
  const tween = new AFRAME.TWEEN.Tween(objsize)
    .to({ scale: 20 }, 1000)
    .repeat(Infinity)
    .yoyo(true)
    .onUpdate(() => {
      size.setAttribute('text', 'wrapCount', objsize.scale);
    })
    .start();
}());
