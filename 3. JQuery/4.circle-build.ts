interface Circle {
   radius: number,
   color:string,
    
}
function printCircle(circleObj: Circle) {
    document.write("Radius: " + circleObj.radius + ", color: "+ circleObj.color)
}

let _circle = {radius:10, color:"blue"};
printCircle(_circle);

