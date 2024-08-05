import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ExpenseFilter({ filter, setFilter }) {
  return (
    <div>
      <select
        value={filter.category}
        onChange={(e) => setFilter({ ...filter, category: e.target.value })}
      >
        <option value="all">Tất cả các loại</option>
        <option value="Food">Thực phẩm</option>
        <option value="Transport">Giao thông</option>
        <option value="Entertainment">Giải trí</option>
        <option value="Other">Khác</option>
      </select>
      <DatePicker
        selected={filter.startDate ? new Date(filter.startDate) : null}
        onChange={(date) => setFilter({ ...filter, startDate: date ? date.toISOString().split('T')[0] : null })}
        placeholderText="Ngày bắt đầu"
        dateFormat="yyyy-MM-dd"
      />
      <DatePicker
        selected={filter.endDate ? new Date(filter.endDate) : null}
        onChange={(date) => setFilter({ ...filter, endDate: date ? date.toISOString().split('T')[0] : null })}
        placeholderText="Ngày kết thúc"
        dateFormat="yyyy-MM-dd"
      />
    </div>
  );
}

export default ExpenseFilter;
