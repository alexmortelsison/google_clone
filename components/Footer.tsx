import React from "react";
import CountryLookUp from "./CountryLookUp";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full text-gray-500">
      <div className="border-b p-4">
        <CountryLookUp />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 my-4">
        <div>
          <ul className="flex space-x-4">
            <li className="link cursor-pointer">About</li>
            <li className="link cursor-pointer">Advertising</li>
            <li className="link cursor-pointer">Business</li>
            <li className="link cursor-pointer">How Search Works</li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-4 mt-4">
            <li className="link cursor-pointer">Privacy</li>
            <li className="link cursor-pointer">Terms</li>
            <li className="link cursor-pointer">Settings</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
