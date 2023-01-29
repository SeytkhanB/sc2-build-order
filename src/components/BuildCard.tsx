import { BuildOrder } from "@prisma/client";
import Link from "next/link";
import Badge, { Variant } from "./Badge";

export const macroBuildType = "macro";
export const timingBuildType = "timing attack";
export const allInBuildType = "all in";
export const cheeseBuildType = "cheese";
export const buildTypes = [
  macroBuildType,
  timingBuildType,
  allInBuildType,
  cheeseBuildType,
];

function BuildCard(b: BuildOrder) {
  const badgeVariant: Variant = {
    [cheeseBuildType]: Variant.Warning,
    [macroBuildType]: Variant.Success,
    [timingBuildType]: Variant.Primary,
    [allInBuildType]: Variant.Danger,
  }[b.style]!;

  return (
    <div className="w-80 max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <h5 className="text-m2xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
          {b.build.length > 15 && b.build.substring(0, 21) + "..."}
        </h5>
      </a>

      <Badge text={b.author} variant={badgeVariant} tag="Author" />
      <Badge text={b.style} variant={badgeVariant} tag="Style" />
      <Badge text={b.desc} variant={badgeVariant} tag="Description" />

      <Link
        href={`/builds/${b.id}`}
        className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        View Build
        <svg
          aria-hidden="true"
          className="ml-2 -mr-1 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </div>
  );
}

export default BuildCard;
