// Function to simulate a speed detection system, checking for demerit points and license suspension.
function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const demeritPointsPer5KmOver = 1;

  if (speed < speedLimit) {
      console.log("OK");
  } else {
      // Calculate demerit points
      const demeritPoints = Math.floor((speed - speedLimit) / 5);

      if (demeritPoints > 0) {
          console.log(`Points: ${demeritPoints}`);
      } else {
          console.log("OK");
      }
  }
}

// Example usage
const carSpeed = prompt("Enter the speed of the car (in km/h):");
calculateDemeritPoints(parseFloat(carSpeed));