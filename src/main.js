const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var scene = [];

var currObj = {
  startX: 0,
  startY: 0,
  endX: 0,
  endY: 0,
  isBeingBuilt: false,
};

// resize the canvas to fill browser window dynamically
window.addEventListener("resize", (e) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render(context,scene); 
});

canvas.addEventListener("mousemove", (e) => {
  if (currObj.isBeingBuilt) {
    render(context,scene); 
  }
});



