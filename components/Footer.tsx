import React from "react";
import CountryLookUp from "./CountryLookUp";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full text-gray-400">
      <div className="border-b w-full pb-4 px-8">
        <CountryLookUp />
      </div>
      <div className="flex items-center mb-4 flex-col md:flex-row justify-between px-12 mt-4">
        <div>
          <ul className="flex space-x-4">
            <li className="link cursor-pointer text-gray-400">About</li>
            <li className="link cursor-pointer text-gray-400">Advertising</li>
            <li className="link cursor-pointer text-gray-400">Business</li>
            <li className="link cursor-pointer text-gray-400">
              How Search works
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li className="link cursor-pointer text-gray-400">Privacy</li>
            <li className="link cursor-pointer text-gray-400">Terms</li>
            <li className="link cursor-pointer text-gray-400">Settings</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
