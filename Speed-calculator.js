// Function to simulate a speed detection system, checking for demerit points and license suspension.
function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const suspensionThreshold = 12;
  
    if (speed <= speedLimit) {
      console.log("OK");
    } else {
      const overSpeed = speed - speedLimit;
      const demeritPoints = Math.floor(overSpeed / kmPerDemeritPoint);
  
      if (demeritPoints > suspensionThreshold) {
        console.log("License suspended");
      } else {
        console.log("Points:", demeritPoints);
      }
    }
  }
//   Example usage:
speedDetector(80); // Should print "Points: 2"
speedDetector(135); // Should print "License suspended"