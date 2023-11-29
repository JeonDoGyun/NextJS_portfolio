import Link from "next/link";
import React from "react";
import ToggleBtn from "./ToggleBtn";

const GNB = () => {
  return (
    <header className="text-yellow-500 body-font">
      <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-semibold items-center mb-4 md:mb-0"
        >
          <span className="ml-3 text-2xl hover:text-yellow-400">
            My Portfolio
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center font-semibold text-lg justify-center">
          <Link
            href="/"
            className="mr-5 hover:text-yellow-400 hover:border-b-2 border-b-yellow-400"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="mr-5 hover:text-yellow-400 hover:border-b-2 border-b-yellow-400"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="mr-5 hover:text-yellow-400 hover:border-b-2 border-b-yellow-400"
          >
            Contacts
          </Link>

          <ToggleBtn />
        </nav>
      </div>
    </header>
  );
};

export default GNB;
