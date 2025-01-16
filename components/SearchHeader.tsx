import Image from "next/image";
import React from "react";
import Searchbox from "./Searchbox";
import { Grip, GripIcon } from "lucide-react";
import Avatar from "./Avatar";
import Link from "next/link";
import HeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header>
      <div className="flex justify-between px-4">
        <div>
          <Link href={"/"} className="flex w-full items-center space-x-4">
            <Image
              src={
                "https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              }
              alt={"logo"}
              width={120}
              height={40}
              className="mt-8"
            />
            <Searchbox />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <GripIcon
            size={34}
            className="bg-transparent hover:bg-gray-100 p-2 rounded-full mt-8 hidden md:inline-flex"
          />
          <Avatar className="mt-7 w-12 rounded-full hidden md:inline-flex cursor-pointer" />
        </div>
      </div>
      <HeaderOptions />
    </header>
  );
}
