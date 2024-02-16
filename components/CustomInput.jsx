import Image from "next/image";
import React, { useState } from "react";
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
  const [showPassword, setShowPassword] = useState(false);
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
            className="p-3 w-full mb-6 mt-1 rounded-lg"
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
            className="p-3 w-full mb-6 mt-1 border-2 border-[#096B45] rounded-lg"
            placeholder={placeholder}
            style={style}
          />
        );
      case "date":
        return (
          <input
            type="date"
            {...field}
            className="p-3 w-full mb-6 mt-1 border-2 border-[#096B45] rounded-lg"
            style={style}
          />
        );
      case "password":
        return (
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
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
                <Image
                  src="/asset/close-eye.png"
                  height={24}
                  width={24}
                  alt="Close eye ison"
                />
              ) : (
                <Image
                  src="/asset/view-eye.png"
                  height={24}
                  width={24}
                  alt="Close eye ison"
                />
              )}
            </button>
          </div>
        );
      default:
        return (
          <input
            type={type}
            placeholder={placeholder}
            {...field}
            className="p-3 w-full mb-6 mt-1 border-2 border-[#096B45] rounded-lg"
            style={style}
          />
        );
    }
  };

  return (
    <div>
      <label className="label-3_medium">{label}</label>
      {renderInput()}
      {fieldState.error && (
        <p style={{ color: "red" }}>{fieldState.error.message}</p>
      )}
    </div>
  );
};

export default CustomInput;
