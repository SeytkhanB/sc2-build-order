function Label({ children, labelFor }: { children: string; labelFor: string }) {
  return (
    <label
      htmlFor={labelFor}
      className="ml-2 w-full py-3 text-sm font-medium capitalize text-gray-900 dark:text-gray-300"
    >
      {children}
    </label>
  );
}

export default Label;
