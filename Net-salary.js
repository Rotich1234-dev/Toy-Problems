function calculateNetIncome(grossSalary) {
  // Constants for PAYE
  const payeBrackets = [
      { min: 0, max: 24000, rate: 10.0 },
      { min: 24001, max: 32333, rate: 25.0 },
      { min: 32334, max: 500000, rate: 30.0 },
      { min: 500001, max: 800000, rate: 32.5 },
      { min: 800001, max: Infinity, rate: 35.0 }
  ];

  // Constants for NHIF
  const nhifBrackets = [
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

  // Constants for NSSF
  const nssfRate = 6; // NSSF rate is fixed at 6% of pensionable amount 18000
  const housingRate= 1.5;

  // Calculate PAYE
  let paye = 0;
  for (const bracket of payeBrackets) {
      if (grossSalary > bracket.max) {
          paye += (bracket.max - bracket.min + 1) * (bracket.rate / 100);
      } else {
          paye += (grossSalary - bracket.min + 1) * (bracket.rate / 100);
          break;
      }
  }

  // Calculate NHIF
  let nhif = 0;
  for (const bracket of nhifBrackets) {
      if (grossSalary > bracket.max) {
          nhif = bracket.deduction;
      } else {
          nhif = bracket.deduction;
          break;
      }
  }

  // Calculate NSSF
  const nssf = 1080;
  const relief = 2400;
  const housing_levy = (grossSalary * housingRate ) / 100;

  // Calculate net income
  const netIncome = grossSalary - paye - nhif - nssf - housing_levy + relief;

  // Display the results
  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`PAYE: ${paye.toFixed(2)}`);
  console.log(`NHIF: ${nhif.toFixed(2)}`);
  console.log(`NSSF: ${nssf.toFixed(2)}`);
  console.log(`HOUSING LEVY: ${housing_levy.toFixed(2)}`);
  console.log(`PERSONAL RELIEF: ${relief.toFixed(2)}`);
  console.log(`Net Income: ${netIncome.toFixed(2)}`);
}

// Example usage
const grossSalary = prompt("Enter the gross salary:");
calculateNetIncome(parseFloat(grossSalary));
