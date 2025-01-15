import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import { CameraIcon, Mic, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <div className="justify-center flex flex-col items-center mt-64">
        <Link href={"/"}>
          <Image
            src={
              "https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            }
            alt={"logo"}
            width={300}
            height={100}
          />
        </Link>
        <HomeSearch />
        <p className="text-sm mt-8">
          Google offered in:
          <span className="ml-1 text-blue-500 hover:underline">日本語</span>
        </p>
      </div>
    </div>
  );
}
