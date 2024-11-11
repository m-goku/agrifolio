// components/MultiSelect.tsx
import React from "react";
import Select from "react-select";

interface MultiSelectProps {
  options: { value: string, label: string }[];
  value: { value: string, label: string }[];
  onChange: (selectedOptions: any) => void;
  placeholder?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <Select
      isMulti
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder || "Select options..."}
      className="w-full"
      classNamePrefix="react-select"
      theme={(theme) => ({
        ...theme,
        borderRadius: 8,
        colors: {
          ...theme.colors,
          primary25: "#e2e8f0", // Light gray for hover
          primary: "#3b82f6", // Blue
        },
      })}
      styles={{
        control: (base) => ({
          ...base,
          padding: "6px",
          borderColor: "#cbd5e1", // Customize border color
          boxShadow: "none",
          "&:hover": {
            borderColor: "#94a3b8", // Border color on hover
          },
        }),
        multiValue: (base) => ({
          ...base,
          backgroundColor: "#e2e8f0", // Background color for selected items
          borderRadius: "4px",
        }),
        multiValueLabel: (base) => ({
          ...base,
          color: "#1e293b", // Color of selected item labels
        }),
        multiValueRemove: (base) => ({
          ...base,
          color: "#1e293b",
          ":hover": {
            backgroundColor: "#f87171", // Red on hover
            color: "white",
          },
        }),
      }}
    />
  );
};

export default MultiSelect;
