const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Points that have been drawn
var points = [];

//Points that are being drawn
var activePoints = [];

//Lines between points
var lines = [];

//Screen coords
var currPoint = {
  x: 0,
  y: 0,
};

//Point Indexes
var currLine = {
  start: 0,
  end: 0,
};

var isBeingBuilt = false;

// resize the canvas to fill browser window dynamically
window.addEventListener("resize", (e) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render(context,lines); 
});

canvas.addEventListener("mousemove", (e) => {
  // Add a is being built flag
  if (activePoints.length == 4) {
    render(context,lines); 
  }
});

render(context,lines); 