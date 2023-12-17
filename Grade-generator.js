// function to correctly determine the grade based on the given score.
function studentGradeGenerator(score){
    if(score < 0 || score > 100){
        return "Invalid input, the limit is from 0 to 100.";
    }
    else if (score >= 79)  {
        return 'A';
      } else if (score >= 60) {
        return 'B';
      } else if (score >= 50) {
        return 'C';
      } else if (score >= 40) {
        return 'D';

      } else {   
        return 'E';
      }
}

// example usage
const sampleScore = 85;
const grade = studentGradeGenerator(sampleScore);
console.log(`The grade for score ${sampleScore} is: ${grade}`);