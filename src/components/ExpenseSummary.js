import React from 'react';

function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0); // Tính tổng chi tiêu

  return (
    <div>
      <h2>Tổng kết</h2>
      <p>Tổng chi tiêu: {total.toFixed(2)} VND</p>
    </div>
  );
}

export default ExpenseSummary;
