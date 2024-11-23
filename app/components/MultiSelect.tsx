'use client';

import React from "react";
import Select from "react-select";
import { StylesConfig } from 'react-select';

// Define proper types for the options and values
type Option = {
  value: string;
  label: string;
};

interface MultiSelectProps {
  options: Option[];
  value: Option[];
  onChange: (selectedOptions: Option[]) => void;
  placeholder?: string;
  isDisabled?: boolean;
}

// Define styles separately for better organization
const selectStyles: StylesConfig<Option, true> = {
  control: (base) => ({
    ...base,
    padding: "6px",
    borderColor: "#cbd5e1",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#94a3b8",
    },
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#e2e8f0",
    borderRadius: "4px",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#1e293b",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "#1e293b",
    ":hover": {
      backgroundColor: "#f87171",
      color: "white",
    },
  }),
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  isDisabled = false,
}) => {
  // Add client-side only rendering to prevent hydration issues
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering the select on the server
  if (!mounted) {
    return <div className="h-[42px] w-full bg-gray-50 rounded-lg border border-gray-200" />;
  }

  return (
    <Select<Option, true>
      instanceId="my-custom-select"
      isMulti
      options={options}
      value={value}
      onChange={(newValue) => onChange(newValue as Option[])}
      placeholder={placeholder || "Select options..."}
      isDisabled={isDisabled}
      className="w-full"
      classNamePrefix="react-select"
      theme={(theme) => ({
        ...theme,
        borderRadius: 8,
        colors: {
          ...theme.colors,
          primary25: "#e2e8f0",
          primary: "#3b82f6",
        },
      })}
      styles={selectStyles}
    />
  );
};

export default MultiSelect;