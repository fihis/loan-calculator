import React from "react";
import { FixedSizeList as List } from "react-window";
import { PaymentSchedule } from "../loan.types";
import "./ScheduleTable.css";

interface ScheduleTableProps {
  schedule: PaymentSchedule[];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ schedule }) => {
  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const row = schedule[index];
    return (
      <div className="table-row" style={style}>
        <div>{row.month}</div>
        <div>{row.payment.toFixed(2)}</div>
        <div>{row.principal.toFixed(2)}</div>
        <div>{row.interest.toFixed(2)}</div>
        <div>{row.remainingBalance.toFixed(2)}</div>
      </div>
    );
  };

  return (
    <div className="schedule-table-container">
      <h3>Payment Schedule</h3>
      <div className="schedule-table">
        <div className="table-header">
          <div>Month</div>
          <div>Payment</div>
          <div>Principal</div>
          <div>Interest</div>
          <div>Remaining Balance</div>
        </div>
        <List
          itemCount={schedule.length}
          itemSize={35}
          width="100%"
          height={600}
        >
          {Row}
        </List>
      </div>
    </div>
  );
};

export default ScheduleTable;
