function drawRect(obj) {
  context.beginPath();
  context.rect(obj.startX, obj.startY, obj.endX-obj.startX, obj.endY-obj.startY);
  context.stroke();
}

function drawLine(context,line) {
  context.beginPath();
  context.moveTo(line.start.x, line.start.y);
  context.lineTo(line.end.x, line.end.y);
  context.stroke();
}

function render(context,lines) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  /*
  if (currObj.isBeingBuilt) {
    drawRect(currObj);
  }
  scene.forEach((obj) => {
    drawRect(obj);
  });
  */

  
  lines.forEach((line) => {
    drawLine(context,line);
  });

 
  }