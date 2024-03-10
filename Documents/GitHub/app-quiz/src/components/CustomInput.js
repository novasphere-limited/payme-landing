import React, { useState } from "react";
import { useController } from "react-hook-form";

const CustomInput = ({
  label,
  type,
  icon: Icon,
  options,
  rules,
  control,
  defaultValue,
  placeholder,
  setSelectedFile,
  onInputChange,
  maxlength = "50",
  style,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const { field, fieldState } = useController({
    name: rest.name,
    control,
    defaultValue: defaultValue || "",
    rules,
  });

  const inputId = rest.name;
  const handleChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    field.onChange(e);
  };

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <select
            {...field}
            id={inputId}
            className="px-3 py-4 w-full mb-4 mt-1 rounded-lg border-2"
            style={style}
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.value === ""}
              >
                {option.label}
              </option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            {...field}
            id={inputId}
            className="p-3 w-full mb-6 mt-1 border-2 border-[#096B45] rounded-lg"
            placeholder={placeholder}
            style={style}
          />
        );
      case "date":
        return (
          <input
            id={inputId}
            type="date"
            {...field}
            className="p-3 w-full mb-4 mt-1 border-2 border-[#096B45] rounded-lg"
            style={style}
          />
        );
      case "password":
        return (
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id={inputId}
              placeholder={placeholder}
              {...field}
              className="p-3 w-full mb-4 mt-1 border-2 border-[#096B45] rounded-lg"
              style={style}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[40%] right-4 transform -translate-y-1/2"
            >
              {showPassword ? (
                <img
                  src="/assets/images/close-eye.png"
                  height={24}
                  width={24}
                  alt="Close eye ison"
                />
              ) : (
                <img
                  src="/assets/images/view-eye.png"
                  height={24}
                  width={24}
                  alt="Close eye ison"
                />
              )}
            </button>
          </div>
        );
      case "checkbox":
        return (
          <input type="checkbox" {...field} className="mr-2" id={inputId} />
        );
      case "file":
        return (
          <input
            type="file"
            {...field}
            className="hidden"
            id={inputId}
            onChange={(e) => handleChange(e.target.value)}
          />
        );
      default:
        return (
          <input
            type={type}
            maxLength={maxlength}
            placeholder={placeholder}
            {...field}
            onChange={onInputChange}
            className="p-3 w-full mb-4 mt-1 border-2 border-[#096B45] rounded-lg"
            style={style}
          />
        );
    }
  };

  return (
    <div>
      <label className="label-3_medium" htmlFor={inputId}>
        {Icon ? <Icon /> : label}
      </label>
      {renderInput()}
      {fieldState.error && (
        <p style={{ color: "red" }}>{fieldState.error.message}</p>
      )}
    </div>
  );
};

export default CustomInput;
