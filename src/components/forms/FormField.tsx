"use client";

import { cn } from "@/lib/utils";

interface Option {
  label: string;
  value: string;
}

interface FormFieldProps {
  label: string;
  name: string;
  type:
    | "text"
    | "email"
    | "tel"
    | "select"
    | "multi-select"
    | "textarea"
    | "checkbox";
  required?: boolean;
  placeholder?: string;
  options?: Option[];
  value: string | string[] | boolean;
  onChange: (
    value: string | string[] | boolean,
    name: string
  ) => void;
  error?: string;
}

const baseInputStyles =
  "w-full rounded-lg border border-[rgba(28,25,23,0.1)] bg-white px-4 py-3 text-[#1C1917] placeholder-[#A8A29E] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export function FormField({
  label,
  name,
  type,
  required = false,
  placeholder,
  options = [],
  value,
  onChange,
  error,
}: FormFieldProps) {
  if (type === "checkbox") {
    return (
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name={name}
            checked={value === true}
            onChange={(e) => onChange(e.target.checked, name)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-[rgba(28,25,23,0.1)] text-accent focus:ring-2 focus:ring-accent/20"
          />
          <span className="text-sm text-[#57534E] leading-relaxed">
            {label}
            {required && <span className="text-[#DC2626] ml-0.5">*</span>}
          </span>
        </label>
        {error && <p className="mt-1 text-sm text-[#DC2626]">{error}</p>}
      </div>
    );
  }

  if (type === "multi-select") {
    const selectedValues = Array.isArray(value) ? value : [];
    return (
      <div>
        <label className="block text-sm font-medium text-[#1C1917] mb-2">
          {label}
          {required && <span className="text-[#DC2626] ml-0.5">*</span>}
        </label>
        <div className="grid grid-cols-2 gap-2">
          {options.map((option) => {
            const isChecked = selectedValues.includes(option.value);
            return (
              <label
                key={option.value}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isChecked
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-[rgba(28,25,23,0.1)] bg-white text-[#57534E] hover:border-[rgba(28,25,23,0.2)]"
                )}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {
                    const next = isChecked
                      ? selectedValues.filter((v) => v !== option.value)
                      : [...selectedValues, option.value];
                    onChange(next, name);
                  }}
                  className="h-4 w-4 shrink-0 rounded border-[rgba(28,25,23,0.1)] text-accent focus:ring-2 focus:ring-accent/20"
                />
                <span>{option.label}</span>
              </label>
            );
          })}
        </div>
        {error && <p className="mt-1.5 text-sm text-[#DC2626]">{error}</p>}
      </div>
    );
  }

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[#1C1917] mb-2"
      >
        {label}
        {required && <span className="text-[#DC2626] ml-0.5">*</span>}
      </label>

      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={value as string}
          onChange={(e) => onChange(e.target.value, name)}
          className={cn(
            baseInputStyles,
            !value && "text-[#A8A29E]",
            error && "border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/20"
          )}
        >
          <option value="">{placeholder || "선택해주세요"}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value as string}
          onChange={(e) => onChange(e.target.value, name)}
          placeholder={placeholder}
          rows={4}
          className={cn(
            baseInputStyles,
            "resize-y min-h-[100px]",
            error && "border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/20"
          )}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value as string}
          onChange={(e) => onChange(e.target.value, name)}
          placeholder={placeholder}
          className={cn(
            baseInputStyles,
            error && "border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/20"
          )}
        />
      )}

      {error && <p className="mt-1.5 text-sm text-[#DC2626]">{error}</p>}
    </div>
  );
}
