import {
  LoanInput,
  PaymentSchedule,
} from "../components/LoanCalculator/loan.types";

export const calculateLoan = (loanInput: LoanInput) => {
  const { loanAmount, loanTerm, interestRate } = loanInput;
  const monthlyRate = interestRate / 1200;
  const monthlyPayment = calculateMonthlyPayment(
    loanAmount,
    monthlyRate,
    loanTerm
  );

  let balance = loanAmount;
  const newSchedule: PaymentSchedule[] = [];

  for (let month = 1; month <= loanTerm && balance > 0; month++) {
    const interest = balance * monthlyRate;
    const principal = Math.min(monthlyPayment - interest, balance);
    balance -= principal;

    newSchedule.push({
      month,
      payment: principal + interest,
      principal,
      interest,
      remainingBalance: balance,
    });
  }

  return newSchedule;
};

const calculateMonthlyPayment = (
  principal: number,
  rate: number,
  term: number
) => {
  if (rate === 0) return principal / term;
  return (
    (principal * rate * Math.pow(1 + rate, term)) /
    (Math.pow(1 + rate, term) - 1)
  );
};
