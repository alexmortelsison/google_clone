import Image from "next/image";
import React from "react";
import Searchbox from "./Searchbox";
import { GripIcon, SettingsIcon } from "lucide-react";
import Avatar from "./Avatar";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header>
      <div className="md:px-16 px-4 py-8 flex justify-between items-center">
        <Image
          src={
            "https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
          alt={"google logo"}
          width={120}
          height={40}
        />
        <div className="flex-1">
          <Searchbox />
        </div>
        <div className=" hidden sm:inline-flex items-center space-x-4 ">
          <SettingsIcon className="text-gray-700 hover:cursor-pointer" />
          <GripIcon
            size={40}
            className="hover:bg-gray-100 rounded-full p-2 text-gray-700"
          />
          <Avatar />
        </div>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
