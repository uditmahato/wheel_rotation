function playSpinSound() {
  var spinSound = document.getElementById("spinSound");
  spinSound.play();
}

function stopSpinSound() {
  var spinSound = document.getElementById("spinSound");
  spinSound.pause();
}

function myfunction(){
playSpinSound(); // Play the spin sound when the wheel starts spinning

var min = 1024;
var max = 9999;
var deg = Math.floor(Math.random() * (max - min)) + min;
document.getElementById('box').style.transform = "rotate("+deg+"deg)";

// Simulate spinning time (adjust milliseconds as needed)
setTimeout(function(){
  stopSpinSound(); // Stop the spin sound when the spinning is done
}, 5000); // Example: 5000 milliseconds (5 seconds), adjust as needed
}
