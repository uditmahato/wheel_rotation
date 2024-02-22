function myfunction() {
  var totalRotations = 4; // Total number of rotations
  var rotationCount = 0; // Counter for the number of rotations
  var wheel = document.getElementById('box');

  // Function to perform one rotation of the wheel in a clockwise direction
  function rotateWheel() {
    var randomAngle = Math.floor(Math.random() * 360); // Generate a random angle between 0 and 359 degrees
    var currentRotation = randomAngle + 360 * rotationCount; // Calculate the current rotation angle

    wheel.style.transition = "transform 0.5s linear"; // Adjust the spinning duration here
    wheel.style.transform = "rotate(" + currentRotation + "deg)";
    rotationCount++;

    if (rotationCount < totalRotations) {
      // Continue rotating until the desired number of rotations is reached
      setTimeout(rotateWheel, 500); // Adjust the delay between rotations here
    } else {
      // After the final rotation, wait for a brief moment and then announce the prize
      setTimeout(function() {
        announcePrize(currentRotation % 360); // Calculate the angle within the 0-360 range
      }, 500);
    }
  }

  // Start rotating the wheel
  rotateWheel();
}

function announcePrize(angle) {
  console.log(angle);
  var prize = calculatePrize(angle); // Call the function to determine the prize
  alert("Congratulations! You've won: " + prize); // Display a popup with the prize information
}

function calculatePrize(angle) {
  // Your logic to determine which prize corresponds to the given angle
  // You may need to divide the wheel into sectors and map angles to prizes accordingly
  // For simplicity, I'll provide a basic example

  if (angle >= 0 && angle < 90) {
    return "2nd Chance";
  } else if (angle >= 90 && angle < 180) {
    return "You Lose";
  } else if (angle >= 180 && angle < 270) {
    return "Mug";
  } else {
    return "Pen";
  }
}
