import React from "react";
import CountryLookUp from "./CountryLookUp";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 bg-gray-100 w-full text-gray-500 tracking-tighter px-4 items-center">
      <div className="border-b border-b-gray-200 mt-2 px-4">
        <CountryLookUp />
      </div>
      <div className="flex flex-col sm:flex-row justify-between px-6 items-center">
        <div className="mt-2">
          <ul className="flex space-x-4">
            <li className="link cursor-pointer">About</li>
            <li className="link cursor-pointer">Advertising</li>
            <li className="link cursor-pointer">Business</li>
            <li className="link cursor-pointer">How Search Works</li>
          </ul>
        </div>
        <div className="my-4">
          <ul className="flex space-x-4">
            <li className="link cursor-pointer">Privacy</li>
            <li className="link cursor-pointer">Terms</li>
            <li className="link cursor-pointer">Settings</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
