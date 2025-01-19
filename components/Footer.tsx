import React from "react";
import CountryLookUp from "./CountryLookUp";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full text-gray-500">
      <div className="border-b px-8 pb-2">
        <CountryLookUp />
      </div>
      <div className="flex items-center flex-col sm:flex-row justify-between px-16 my-4">
        <div>
          <ul className="flex space-x-4">
            <li>About</li>
            <li>Advertising</li>
            <li>Business</li>
            <li>How Search works</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-center items-center space-x-4 pt-2">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
