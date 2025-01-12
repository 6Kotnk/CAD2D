canvas.addEventListener("mousedown", (e) => {
  currObj.startX = e.offsetX;
  currObj.startY = e.offsetY;
  currObj.isBeingBuilt = true;
  console.log("mousedown"); 
});
  
canvas.addEventListener("mousemove", (e) => {
  if (currObj.isBeingBuilt) {
    currObj.endX = e.offsetX;
    currObj.endY = e.offsetY;
  }
  console.log("mousemove"); 
});

window.addEventListener("mouseup", (e) => {
  currObj.endX = e.offsetX;
  currObj.endY = e.offsetY;
  currObj.isBeingBuilt = false;

  scene.push(currObj);
  currObj = {
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    isBeingBuilt: false,
  };

  console.log("mouseup"); 

});