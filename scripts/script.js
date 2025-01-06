function playSpinSound() {
  const spinSound = document.getElementById("spinSound");
  spinSound.play();
}

function stopSpinSound() {
  const spinSound = document.getElementById("spinSound");
  spinSound.pause();
  spinSound.currentTime = 0; // Reset sound to the start
}
function getResult(angle) {
  const initialRotation = -23; // Adjust for the CSS starting rotation
  const normalizedAngle = (angle - initialRotation + 360) % 360; // Normalize to 0-359°

  // Define the angle ranges and their corresponding outcomes
  const outcomes = [
    { range: [0, 44], result: "A" },
    { range: [45, 89], result: "B" },
    { range: [90, 134], result: "C" },
    { range: [135, 179], result: "D" },
    { range: [180, 224], result: "E" },
    { range: [225, 269], result: "F" },
    { range: [270, 314], result: "G" },
    { range: [315, 359], result: "H" },
  ];

  // Find the result based on the angle range
  for (let outcome of outcomes) {
    const [min, max] = outcome.range;
    if (normalizedAngle >= min && normalizedAngle <= max) {
      return outcome.result;
    }
  }
  return "Unknown"; // Fallback in case of an error
}

function myfunction() {
  playSpinSound(); // Play the spin sound

  const min = 1024; // Minimum rotations (3 full spins)
  const max = 9999; // Maximum rotations
  const deg = Math.floor(Math.random() * (max - min)) + min; // Always positive for clockwise rotation

  // Apply rotation to the wheel
  const box = document.getElementById("box");
  box.style.transition = "transform 5s ease-out"; // Smooth spinning
  box.style.transform = `rotate(${deg}deg)`; // Rotate the wheel in one direction (clockwise)

  // Calculate the stopping angle
  const stoppingAngle = deg % 360; // Get the final angle within 0-359°

  // Debugging: Log the stopping angle
  console.log(`Raw Angle: ${deg}, Stopping Angle: ${stoppingAngle}`);

  // Stop the spin sound and show result
  setTimeout(() => {
    stopSpinSound(); // Stop the spin sound
    const result = getResult(stoppingAngle); // Determine the result
    alert(`The wheel stopped on: ${result}`); // Display the result
  }, 5000); // Match the spin duration
}
