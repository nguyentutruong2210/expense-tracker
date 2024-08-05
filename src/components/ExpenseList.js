import React from 'react';

function ExpenseList({ expenses, deleteExpense, editExpense }) {
  return (
    <ul>
      {expenses.map(expense => (
        <li key={expense.id}>
          <span>{expense.date}</span>
          <span>{expense.amount.toFixed(2)} VND</span>
          <span>{expense.category}</span>
          <span>{expense.description}</span>
          <button onClick={() => deleteExpense(expense.id)}>Xóa</button>
          <button onClick={() => editExpense(expense.id, { ...expense, amount: expense.amount + 1 })}>Chỉnh sửa</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
