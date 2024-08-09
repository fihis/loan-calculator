import { useEffect, useRef, useState } from "react";
import { LoanInput, PaymentSchedule } from "./loan.types";
import { calculateLoan } from "../../utils/calculate";
import ScheduleTable from "./ScheduleTable";
import LoanForm from "./LoanForm";

const LoanCalculator: React.FC = () => {
  const [schedule, setSchedule] = useState<PaymentSchedule[] | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  const handleCalculateClick = (loanInput: LoanInput) => {
    const newSchedule = calculateLoan(loanInput);
    setSchedule(newSchedule);
  };

  useEffect(() => {
    if (schedule && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [schedule]);

  return (
    <div>
      <LoanForm onCalculate={handleCalculateClick} />
      {schedule && (
        <div ref={tableRef}>
          <ScheduleTable schedule={schedule} />
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
