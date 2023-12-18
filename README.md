# Toy-Problems
This is a repository on toy problems of phase1, it entails student grade generator speed detector and net salary calculator


This repository includes JavaScript code examples for three different scenarios.

## 1. Student Grade Generator

<!-- Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40. -->
### Function: `calculateGrade`

The `calculateGrade` function assesses a student's score and returns the corresponding grade based on predefined criteria.
The provided criteria is as follows:
The input should be between 0 and 100.The output should correspond the correct grade, i.e A> 79, B from 60 to 79, C from 59 to 49, D from 49 to 40 and E for less than 39.
 const userInput = prompt("Enter student marks (between 0 and 100):");

  // Parse the input as a number
  const marks = parseFloat(userInput);

  // Check if the input is a valid number and within the range
  if (!isNaN(marks) && marks >= 0 && marks <= 100) 
 // Calculate the grade based on the marks
      const grade = '';


## 2. Speed Detector

<!-- Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points -->

This JavaScript function, `calculateDemeritPoints`, simulates a speed detection system for cars. It checks if a car is within the speed limit or calculates demerit points and checks for license suspension if the speed limit is exceeded.

### Function: `calculateDemeritPoints(speed)`

#### Parameters:

- `speed` (Number): The speed of the car in kilometers per hour (km/h).

if speed is less than 70, it should print "OK" . Otherwise for every 5km/hr above the speed limit, 1 demerit point is given to driver.



## 3. Net Salary Calculator
<!-- Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. -->

This JavaScript function, `calculateNetIncome`, computes the net salary based on the gross salary, tax rate, NHIF (National Hospital Insurance Fund) deduction, and NSSF (National Social Security Fund) deduction.

### Function: `calculateNetIncome(grossSalary, taxRate, nhifDeduction, nssfDeduction)`

#### Parameters:

- `grossSalary` (Number): The gross salary before deductions.
- `taxRate` (Number): The flat tax rate applied to the gross salary.
- `nhifDeduction` (Number): The deduction for NHIF (National Hospital Insurance Fund).
- `nssfDeduction` (Number): The deduction for NSSF (National Social Security Fund).

// from the links provided , the rates for NHIF, PAYE and NSSF is available as follows
``
 // constants for PAYE
  const payeBracket = [
    { min: 0, max: 24000, rate: 10.0 },
    { min: 24001, max: 32333, rate: 25.0 },
    { min: 32334, max: 500000, rate: 30.0 },
    { min: 500001, max: 800000, rate: 32.5 },
    { min: 800001, max: Infinity, rate: 35.0 }
  ];
  // constants for NHIF
  const nhifBracket = [
    { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
        { min: 80000, max: 89999, deduction: 1500 },
        { min: 90000, max: 99999, deduction: 1600 },
        { min: 100000, max: Infinity, deduction: 1700 }

  ];
  // constants for nssf
  const nssfRate = 6; // NSSF rate is fixed at 6% of pensionable amount 18000
  // Example usage
const grossSalary = prompt("Enter the gross salary:");
calculateNetIncome(parseFloat(grossSalary));
    

 ``

