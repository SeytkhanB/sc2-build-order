import { useRouter } from "next/router";
import Head from "next/head";
import { trpc } from "../../utils/trpc";
import Badge from "../../components/Badge";

function BuildPage() {
  const { buildId } = useRouter().query as { buildId: string };

  const { data } = trpc.builds.getBuildById.useQuery({
    buildId,
  });

  return (
    <>
      <Head>
        <title>View Build</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="stylesheet" href="/sc2.png" />
      </Head>
      <div
        className="flex min-h-screen 
        flex-col items-center justify-center gap-4 bg-gradient-to-b 
        from-[#2e026d] to-[#15162c] text-white"
      >
        <div className="w-80 max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
          <h2 className="text-3xl text-white">{data?.title}</h2>
          <pre>{data?.build}</pre>
        </div>
      </div>
    </>
  );
}

export default BuildPage;
