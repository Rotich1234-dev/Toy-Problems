// function to correctly determine the grade based on the given score.
function calculateGrade() {
  // Prompt user for input
  const userInput = prompt("Enter student marks (between 0 and 100):");

  // Parse the input as a number
  const marks = parseFloat(userInput);

  // Check if the input is a valid number and within the range
  if (!isNaN(marks) && marks >= 0 && marks <= 100) {
      // Calculate the grade based on the marks
      var grade = '';

      if (marks > 79) {
          grade = 'A';
      } else if (marks >= 60 && marks < 80) {
          grade = 'B';
      } else if (marks >= 49 && marks < 60) {
          grade = 'C';
      } else if (marks >= 40 && marks < 50) {
          grade = 'D';
      } else {
          grade = 'E';
      }

      // Display the result
      alert('Student marks: ' + marks + '\nGrade: ' + grade);
  } else {
      // Display an error message for invalid input
      alert('Invalid input. Please enter a valid number between 0 and 100.');
  }
}

// Call the function
calculateGrade();