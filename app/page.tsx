import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <div className="flex flex-col items-center mt-48">
        <Image
          src={
            "https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
          alt={"google logo"}
          width={300}
          height={120}
        />
        <HomeSearch />
      </div>
      <Footer />
    </div>
  );
}
