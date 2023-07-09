import React from "react";
import { Select, Option } from "@material-tailwind/react";

export default function SelectTailwind({ options, label, onSelectChange, value }) {
  return (
    <div className="w-full">
      <Select
        value={value}
        color="orange"
        label={label}
        onChange={(e) => onSelectChange(e)}
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
