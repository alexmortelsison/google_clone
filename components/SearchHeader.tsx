import Image from "next/image";
import Link from "next/link";
import React from "react";
import Searchbox from "./Searchbox";
import { GripIcon, SettingsIcon } from "lucide-react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

export default function SearchHeader() {
  return (
    <header>
      <div className="flex items-center px-8 md:px-16 py-8">
        <Link href={"/"}>
          <Image
            src={
              "https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            }
            alt={"google logo"}
            width={120}
            height={40}
          />
        </Link>
        <div className="flex-1">
          <Searchbox />
        </div>
        <div className="space-x-4 items-center hidden sm:inline-flex px-4">
          <SettingsIcon />
          <GripIcon />
          <Avatar />
        </div>
      </div>
      <HeaderOptions />
    </header>
  );
}
