import React, { useState, useEffect } from 'react';
import './App.css'; // Nhập CSS
import ExpenseForm from './components/ExpenseForm'; // Nhập Component Form thêm chi tiêu
import ExpenseList from './components/ExpenseList'; // Nhập Component Danh sách chi tiêu
import ExpenseFilter from './components/ExpenseFilter'; // Nhập Component Lọc chi tiêu
import ExpenseSummary from './components/ExpenseSummary'; // Nhập Component Tổng hợp chi tiêu

function App() {
  const [expenses, setExpenses] = useState([]); // Danh sách chi tiêu
  const [filter, setFilter] = useState({ category: 'all', startDate: null, endDate: null }); // Bộ lọc chi tiêu

  useEffect(() => {
    // Lấy danh sách chi tiêu từ Local Storage khi ứng dụng khởi động
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  useEffect(() => {
    // Lưu danh sách chi tiêu vào Local Storage khi có sự thay đổi
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    // Thêm chi tiêu mới vào danh sách
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    // Xóa chi tiêu khỏi danh sách
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const editExpense = (id, updatedExpense) => {
    // Chỉnh sửa chi tiêu trong danh sách
    setExpenses(expenses.map(expense => (expense.id === id ? updatedExpense : expense)));
  };

  const filteredExpenses = expenses.filter(expense => {
    // Lọc chi tiêu theo loại và khoảng thời gian
    const matchesCategory = filter.category === 'all' || expense.category === filter.category;
    const matchesDateRange = (!filter.startDate || new Date(expense.date) >= new Date(filter.startDate)) &&
                             (!filter.endDate || new Date(expense.date) <= new Date(filter.endDate));
    return matchesCategory && matchesDateRange;
  });

  return (
    <div className="App">
      <h1>Ứng Dụng Quản Lý Chi Tiêu</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseFilter filter={filter} setFilter={setFilter} />
      <ExpenseSummary expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} deleteExpense={deleteExpense} editExpense={editExpense} />
    </div>
  );
}

export default App;
