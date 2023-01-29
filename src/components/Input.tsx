import React from "react";

interface IInput {
  placeholder: string;
  id: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ placeholder, id, value, handleChange }: IInput) {
  return (
    <input
      onChange={handleChange}
      required
      id={id}
      value={value}
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      placeholder={placeholder}
    />
  );
}

export default Input;
