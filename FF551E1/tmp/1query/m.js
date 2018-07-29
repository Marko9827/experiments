document.addEventListener("contextmenu", function (e) { e.preventDefault(); }, false);
document.addEventListener("dragstart", function (e) { e.preventDefault(); }, false);
document.addEventListener("selectstart", function (e) { e.preventDefault(); }, false);




document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}
document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}
document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}






window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.ieRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var fpsElement = document.getElementById("fps");

var then = Date.now() / 1000;  // get time in seconds
var render = function() {
    var now = Date.now() / 1000;  // get time in seconds
    
    // compute time since last frame
    var elapsedTime = now - then;
    then = now;
    
    // compute fps
    var fps = 1 / elapsedTime;
    fpsElement.innerText = fps.toFixed(2);  
    
    requestAnimFrame(render);
};
render();