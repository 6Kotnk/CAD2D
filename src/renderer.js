function drawRect(obj) {
  context.beginPath();
  context.rect(obj.startX, obj.startY, obj.endX-obj.startX, obj.endY-obj.startY);
  context.stroke();
}

function render(context,scene) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (currObj.isBeingBuilt) {
    drawRect(currObj);
  }
  scene.forEach((obj) => {
    drawRect(obj);
  });

  }