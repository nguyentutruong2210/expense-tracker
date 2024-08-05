import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ExpenseForm({ addExpense }) {
  const [amount, setAmount] = useState(''); // Số tiền chi tiêu
  const [category, setCategory] = useState('Food'); // Loại chi tiêu
  const [description, setDescription] = useState(''); // Mô tả chi tiêu
  const [date, setDate] = useState(new Date()); // Ngày chi tiêu

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && description) {
      addExpense({
        id: Date.now(),
        amount: parseFloat(amount),
        category,
        description,
        date: date.toISOString().split('T')[0]
      });
      setAmount('');
      setDescription('');
      setDate(new Date());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Số tiền"
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Thực phẩm</option>
        <option value="Transport">Giao thông</option>
        <option value="Entertainment">Giải trí</option>
        <option value="Other">Khác</option>
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Mô tả"
        required
      />
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="yyyy-MM-dd"
      />
      <button type="submit">Thêm Chi Tiêu</button>
    </form>
  );
}

export default ExpenseForm;
