canvas.addEventListener("mousedown", (e) => {

  // Push the 4 points of the rectangle

  /*
  0--------1
  |        |
  |        |
  2--------3
  */

  isBeingBuilt = true;

  for (let index = 0; index < 4; index++) {

    currPoint = {
      x: e.offsetX,
      y: e.offsetY,
    };

    activePoints.push(currPoint);
  }

  points.forEach(point => {
    let dist = (point.x - e.offsetX)**2 + (point.y - e.offsetY)**2
    if (dist < 1000){
      activePoints[0] = point;
      activePoints[1].y = point.y;
      activePoints[2].x = point.x;
    }
  });

  //Push points onto the point array
  activePoints.forEach(point => {
    points.push(point);
  });

  //Push the four lines of the rectangle
  currLine = {
    start: activePoints[0],
    end: activePoints[1],
  };
  lines.push(currLine);

  currLine = {
    start: activePoints[0],
    end: activePoints[2],
  };
  lines.push(currLine);

  currLine = {
    start: activePoints[1],
    end: activePoints[3],
  };
  lines.push(currLine);

  currLine = {
    start: activePoints[2],
    end: activePoints[3],
  };
  lines.push(currLine);

  console.log("mousedown"); 
});
  
canvas.addEventListener("mousemove", (e) => {
  if(isBeingBuilt){
    activePoints[1].x = e.offsetX;
    activePoints[3].x = e.offsetX;

    activePoints[2].y = e.offsetY;
    activePoints[3].y = e.offsetY;

    points.forEach(point => {
      activePoints.forEach(actPoint => {
        if(point != actPoint){
          let dist = (point.x - actPoint.x)**2 + (point.y - actPoint.y)**2
          if (dist < 1000){
            actPoint.x = point.x;
            actPoint.y = point.y;
  
            activePoints.forEach(otherPoint => {
              if(otherPoint != actPoint){
  
                if(otherPoint.x == e.offsetX){
                  otherPoint.x = actPoint.x
                }
                if(otherPoint.y == e.offsetY){
                  otherPoint.y = actPoint.y
                }
              }
            });
          }
        }
      });
    });


  }
  console.log("mousemove"); 
});

window.addEventListener("mouseup", (e) => {
  /*
  activePoints[1].x = e.offsetX;
  activePoints[3].x = e.offsetX;

  activePoints[2].y = e.offsetY;
  activePoints[3].y = e.offsetY;
  */
  activePoints = [];

  isBeingBuilt = false;

  console.log("mouseup"); 

});