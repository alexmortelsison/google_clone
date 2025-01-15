import React from "react";
import CountryLookUp from "./CountryLookUp";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full text-sm text-gray-500">
      <div className="border-b">
        <CountryLookUp />
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:px-12 w-full items-center mt-4">
        <ul className="flex space-x-4">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Advertising</li>
          <li className="hover:underline cursor-pointer">Business</li>
          <li className="hover:underline cursor-pointer">How Search works</li>
        </ul>
        <ul className="flex space-x-4 my-4">
          <li className="hover:underline cursor-pointer">Privacy</li>
          <li className="hover:underline cursor-pointer">Terms</li>
          <li className="hover:underline cursor-pointer">Settings</li>
        </ul>
      </div>
    </footer>
  );
}
