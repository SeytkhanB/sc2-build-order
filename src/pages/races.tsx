import { type NextPage } from "next";
import Head from "next/head";
import RaceCard from "../components/RaceCard";

const FindBuilds: NextPage = () => {
  return (
    <>
      <Head>
        <title>Find Builds</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/sc2.png" />
      </Head>
      <div
        className="flex min-h-screen 
        flex-col items-center justify-center gap-4 bg-gradient-to-b 
        from-[#2e026d] to-[#15162c] text-white"
      >
        <h2>Select your Race</h2>

        <ul className="grid grid-cols-3 gap-10">
          <li>
            <RaceCard
              raceHref="/races/zerg/match-ups"
              raceName="zerg"
              imgSrc={"/zerg.jpg"}
            />
          </li>
          <li>
            <RaceCard
              raceHref="/races/protoss/match-ups"
              raceName="protoss"
              imgSrc={"/protoss.jpg"}
            />
          </li>
          <li>
            <RaceCard
              raceHref="/races/terran/match-ups"
              raceName="terran"
              imgSrc={"/terran.jpg"}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default FindBuilds;
