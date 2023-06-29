import React from "react";
import { Select, Option } from "@material-tailwind/react";

export default function SelectTailwind({
  options,
  label,
  value,
  onSelectChange,
}) {
  return (
    <div className="w-full">
      <Select
        color="orange"
        value={value}
        label={label}
        onChange={(e) => onSelectChange(e.target.value)}
      >
        {options ? (
          options.map((op) => (
            <Option value={op} key={op}>
              {op}
            </Option>
          ))
        ) : (
          <Option> choix</Option>
        )}
      </Select>
    </div>
  );
}
