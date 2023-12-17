// Function to calculate the net salary considering gross salary, tax rate, NHIF, and NSSF deductions.
function netSalaryCalculator(grossSalary, taxRate, nhifDeduction, nssfDeduction) {
    // Calculate tax based on the tax rate
    const tax = grossSalary * taxRate;
  
    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;
  
    return netSalary;
  }
  
  // Example usage with hypothetical deduction values and a flat tax rate of 10%
  const grossSalary = 100000; // example gross salary
  const taxRate = 0.10;       // flat tax rate of 10%
  const nhifDeduction = 2000; // example NHIF deduction
  const nssfDeduction = 1000; // example NSSF deduction
  
  const netSalary = netSalaryCalculator(grossSalary, taxRate, nhifDeduction, nssfDeduction);
  console.log(`The net salary is: ${netSalary}`);