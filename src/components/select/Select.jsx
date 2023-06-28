import React from "react";

function Select({ options, value, onSelectChange }) {

  return (
    <select onChange={(e) => onSelectChange(e.target.value)} value={value} className="w-full px-5 py-2 border-1 rounded-md  outline-1">
      {options.map((op) => (
        <option value={op} key={op}>{op}</option>
      ))}
    </select>
  );
}

export default Select;
