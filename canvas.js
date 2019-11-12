

var canvas = document.querySelector('canvas');

console.log("can", canvas)
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d')
c.fillRect(100, 100, 70, 90);
c.fillRect(200, 100, 70, 90);
c.fillRect(300, 100, 70, 90);