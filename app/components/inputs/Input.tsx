"use client";

import {
  RegisterOptions,
  UseFormRegister,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import React from "react";
import clsx from "clsx";

interface InputProps {
  type: "email" | "password" | "text" | "tel";
  name: string;
  label: string;
  errors: FieldErrors;
  options?: RegisterOptions<FieldValues, string> | undefined;
  required?: boolean;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  label,
  errors,
  options,
  disabled,
  register,
}) => {
  return (
    <div className="mt-2">
      <label className="text-sm font-medium px-1 text-neutral-700">
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          autoComplete={name}
          id={name}
          {...register(name, { ...options })}
          aria-invalid={errors[name] ? "true" : "false"}
          className={clsx(
            ` form-input block w-full border-0 py-1.5 rounded-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6`,
            errors[name]
              ? "focus:ring-rose-500 ring-rose-500"
              : "focus:ring-sky-600 ring-gray-300",
            disabled && "opacity-50 cursor-default"
          )}
        />
        {errors[name] && (
          <div className=" text-rose-500 text-sm  pl-1 font-medium">
            {errors[name]?.message as string}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
