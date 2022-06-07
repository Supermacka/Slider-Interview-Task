export function calculateMonthlyCost(
  loanAmount: number,
  repaymentTime: number
): number {
  // Variables
  // console.log("loanAmount: ", loanAmount);
  // console.log("repaymentTime: ", repaymentTime);
  const monthsInYear: number = 12;
  const monthlyRate = 0.099 / monthsInYear;

  let numberOfMonths: number = repaymentTime * monthsInYear;

  // Calculation
  let result: number =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
    (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

  return Math.round(result);
}
