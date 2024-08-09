export type LoanInput = {
  loanAmount: number;
  loanTerm: number;
  interestRate: number;
};

export type PaymentSchedule = {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
};
