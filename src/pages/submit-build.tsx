import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../utils/trpc";

const SubmitPage: NextPage = () => {
  const createBuildMutation = trpc.builds.createBuild.useMutation();
  const [build, setBuild] = useState("");
  const [matchUp, setMatchUp] = useState("ZvT");
  const router = useRouter();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setMatchUp(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setBuild(value);
  };

  async function handleSubmitBuildOrder(e: React.FormEvent) {
    e.preventDefault();
    await createBuildMutation.mutateAsync({
      matchUp,
      build,
    });
    router.push("/builds");
  }

  return (
    <>
      <Head>
        <title>Submit a Build</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="flex min-h-screen 
        flex-col items-center justify-center gap-4 bg-gradient-to-b 
        from-[#2e026d] to-[#15162c] text-white"
      >
        <h2>Submit a Build Order</h2>
        <form
          className="flex
        flex-col items-center justify-center gap-4"
          onSubmit={handleSubmitBuildOrder}
        >
          <label htmlFor="match-up-select">Match Up</label>
          <select
            onChange={handleSelect}
            value={matchUp}
            id="match-up-select"
            className="rounded-sm text-black"
            required
          >
            <option value="zvt">ZvT</option>
            <option value="zvp">ZvP</option>
            <option value="zvz">ZvZ</option>

            <option value="pvt">PvT</option>
            <option value="pvp">PvP</option>
            <option value="pvz">PvZ</option>

            <option value="tvt">TvT</option>
            <option value="tvp">TvP</option>
            <option value="tvz">TvZ</option>
          </select>
          <textarea
            required
            value={build}
            onChange={handleChange}
            className="rounded p-2 text-black "
          />
          <button className="rounded bg-white p-2  text-black">submit</button>
        </form>
      </main>
    </>
  );
};

export default SubmitPage;