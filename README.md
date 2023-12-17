# Toy-Problems
This is a repository on toy problems of phase1, it entails student grade generator speed detector and net salary calculator
# JavaScript Code Examples

This repository includes JavaScript code examples for three different scenarios.

## 1. Student Grade Generator

### Function: `studentGradeGenerator(score)`

The `studentGradeGenerator` function assesses a student's score and returns the corresponding grade based on predefined criteria.
The provided criteria is as follows:
The input should be between 0 and 100.The output should correspond the correct grade, i.e A> 79, B from 60 to 79, C from 59 to 49, D from 49 to 40 and E for less than 39.

#### Example Usage:

```javascript
const sampleScore = 85;
const grade = studentGradeGenerator(sampleScore);
console.log(`The grade for score ${sampleScore} is: ${grade}`);


# 2. Speed Detector

This JavaScript function, `speedDetector`, simulates a speed detection system for cars. It checks if a car is within the speed limit or calculates demerit points and checks for license suspension if the speed limit is exceeded.

## Function: `speedDetector(speed)`

### Parameters:

- `speed` (Number): The speed of the car in kilometers per hour (km/h).

### Example usage:
`

```javascript
// Example 1: Car within speed limit
speedDetector(70);
// Should print "OK"

// Example 2: Car exceeds speed limit
speedDetector(135);
// Should print "License suspended" or "Points: x" based on demerit points


# 3. Net Salary Calculator

This JavaScript function, `netSalaryCalculator`, computes the net salary based on the gross salary, tax rate, NHIF (National Hospital Insurance Fund) deduction, and NSSF (National Social Security Fund) deduction.

## Function: `netSalaryCalculator(grossSalary, taxRate, nhifDeduction, nssfDeduction)`

### Parameters:

- `grossSalary` (Number): The gross salary before deductions.
- `taxRate` (Number): The flat tax rate applied to the gross salary.
- `nhifDeduction` (Number): The deduction for NHIF (National Hospital Insurance Fund).
- `nssfDeduction` (Number): The deduction for NSSF (National Social Security Fund).

### Example usage:

```
```javascript
// Example:
const grossSalary = 100000;
const taxRate = 0.10;
const nhifDeduction = 2000;
const nssfDeduction = 1000;

const netSalary = netSalaryCalculator(grossSalary, taxRate, nhifDeduction, nssfDeduction);
console.log(`The net salary is: ${netSalary}`);

 

