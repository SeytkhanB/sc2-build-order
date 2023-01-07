import { BuildOrder } from "@prisma/client";
import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { trpc } from "../../../../../utils/trpc";

function BuildCard(b: BuildOrder) {
  return (
    <div className="w-auto max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {b.build.length > 15 && b.build.substring(0, 21) + "..."}
        </h5>
      </a>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <b>Creator:</b>{" "}
        <span className="mr-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
          {b.author}
        </span>
      </p>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <b>Style:</b>{" "}
        <span className="mr-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
          {b.style}
        </span>
      </p>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <b>Description:</b>{" "}
        <span className="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
          {b.desc ? b.desc.substring(0, 21) + "..." : "description"}
        </span>
      </p>

      <a
        href="#"
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
      </a>
    </div>
  );
}

const Finall: NextPage = () => {
  const { opponentRace, raceName } = useRouter().query as {
    opponentRace: string;
    raceName: string;
  };

  const builds = trpc.builds.getBuildsByMatchUp.useQuery({
    matchUp: `${raceName?.toLowerCase().charAt(0)}v${opponentRace
      ?.toLowerCase()
      .charAt(0)}`,
  });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/sc2.png" />
      </Head>
      <main
        className="flex min-h-screen 
        flex-col items-center justify-center gap-4 bg-gradient-to-b 
        from-[#2e026d] to-[#15162c] text-white"
      >
        <h2>
          {raceName} vs {opponentRace}
        </h2>
        <section className="grid grid-cols-3 gap-4 px-5">
          {builds.data?.map((build: any) => (
            <BuildCard {...build} key={build.id} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Finall;
