import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <div className="flex justify-center flex-col items-center mt-44 lg:mt-64">
        <Link href={"/"}>
          <Image
            src={
              "https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            }
            alt={"logo"}
            width={300}
            height={120}
          />
        </Link>
        <HomeSearch />
      </div>
    </div>
  );
}
