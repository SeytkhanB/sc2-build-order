import { type NextPage } from "next";
import Link from "next/link";

const Navbar: NextPage = () => {
  return (
    <>
      <nav className="border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              SC2 Build Order Manager
            </span>
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
              <Link href="/" className="link">
                Home
              </Link>
              <Link href="/races" className="link">
                Find Builds
              </Link>
              <Link href="/submit-build" className="link">
                Create Build
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
