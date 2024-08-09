import React, { useState } from "react";
import { LoanInput } from "../loan.types";
import "./LoanForm.css";

interface LoanFormProps {
  onCalculate: (loanInput: LoanInput) => void;
}

const LoanForm: React.FC<LoanFormProps> = ({ onCalculate }) => {
  const [loanInput, setLoanInput] = useState<LoanInput>({
    loanAmount: 0,
    loanTerm: 0,
    interestRate: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoanInput((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCalculate(loanInput);
  };

  return (
    <form onSubmit={handleSubmit} className="loan-form">
      <div className="form-group">
        <label htmlFor="loanAmount">Loan Amount:</label>
        <input
          type="number"
          id="loanAmount"
          name="loanAmount"
          value={loanInput.loanAmount}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="loanTerm">Loan Term (months):</label>
        <input
          type="number"
          id="loanTerm"
          name="loanTerm"
          value={loanInput.loanTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="interestRate">Interest Rate (%):</label>
        <input
          type="number"
          id="interestRate"
          name="interestRate"
          value={loanInput.interestRate}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="submit-button">
        Calculate
      </button>
    </form>
  );
};

export default LoanForm;
