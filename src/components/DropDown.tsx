import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BuildCard, { buildTypes } from "./BuildCard";
import { trpc } from "../utils/trpc";
import { BuildOrder } from "@prisma/client";

const DropDown = ({
  raceName,
  opponentRace,
}: {
  raceName: string;
  opponentRace: string;
}) => {
  const [buildTypeState, setBuildTypeState] = useState(buildTypes[0]);
  const router = useRouter();

  const builds = trpc.builds.getBuildsByMatchUp.useQuery({
    matchUp: `${raceName?.toLowerCase().charAt(0)}v${opponentRace
      ?.toLowerCase()
      .charAt(0)}`,
  });

  const filteredBuilds = (builds?.data ?? []).filter((build: BuildOrder) => {
    return build.style === buildTypeState;
  });

  useEffect(() => {
    if (!router.isReady) return;
    builds.refetch();
  }, [router.isReady, builds]);

  return (
    <>
      <section className="grid grid-cols-3">
        <fieldset>
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Build Type
          </label>

          <ul className="w-48 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            {buildTypes.map((type, index) => (
              <li
                key={index}
                className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center pl-3">
                  <input
                    id={`build-radio-${type}`}
                    type="radio"
                    checked={type === buildTypeState}
                    onChange={() => setBuildTypeState(type)}
                    name="list-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor={`build-radio-${type}`}
                    className="ml-2 w-full py-3 text-sm font-medium capitalize text-gray-900 dark:text-gray-300"
                  >
                    {type}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </fieldset>
      </section>

      <div className="grid grid-cols-3 gap-4 px-5">
        {filteredBuilds.map((build: BuildOrder) => (
          <BuildCard {...build} key={build.id} />
        ))}
      </div>
    </>
  );
};

export default DropDown;
