import React from "react";
import { useForm, useController } from "react-hook-form";

const CustomInput = ({
  label,
  type,
  options,
  rules,
  control,
  defaultValue,
  placeholder,
  style,
  ...rest
}) => {
  //   const { control } = useForm();
  const { field, fieldState } = useController({
    name: rest.name,
    control,
    defaultValue: defaultValue || "",
    rules,
  });

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <select
            {...field}
            className="p-3 w-full mb-6 border-2 border-[#096B45] rounded-lg"
            style={style}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            {...field}
            className="p-3 w-full mb-6 border-2 border-[#096B45] rounded-lg"
            placeholder={placeholder}
            style={style}
          />
        );
      case "date":
        return (
          <input
            type="date"
            {...field}
            className="p-3 w-full mb-6 border-2 border-[#096B45] rounded-lg"
            style={style}
          />
        );
      default:
        return (
          <input
            type={type}
            placeholder={placeholder}
            {...field}
            className="p-3 w-full mb-6 border-2 border-[#096B45] rounded-lg"
            style={style}
          />
        );
    }
  };

  return (
    <div>
      <label className="mb-4 label-3_medium">{label}</label>
      {renderInput()}
      {fieldState.error && (
        <p style={{ color: "red" }}>{fieldState.error.message}</p>
      )}
    </div>
  );
};

export default CustomInput;