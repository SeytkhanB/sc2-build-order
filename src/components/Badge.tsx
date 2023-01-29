import classNames from "classnames";

export enum Variant {
  Danger = "danger",
  Success = "success",
  Warning = "warning",
  Primary = "primary",
}

function Badge({
  variant,
  text,
  tag,
}: {
  variant?: Variant;
  text: string;
  tag: string;
}) {
  const styles = {
    danger: "text-red-800 dark:bg-red-900 dark:text-red-300",
    success: "text-green-800 dark:bg-green-900 dark:text-green-300",
    warning: "text-yellow-800 dark:bg-yellow-100 dark:text-red-300",
    primary: "text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  };

  return (
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      <b>{tag}: </b>
      <span
        className={classNames(
          "mr-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-semibold",
          styles[variant!]
        )}
      >
        {tag === "Description" ? text.substring(0, 21) + "..." : text}
      </span>
    </p>
  );
}

export default Badge;
