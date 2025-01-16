import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <div className="flex flex-col justify-center items-center mt-44">
        <Image
          src={
            "https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
          alt={"logo"}
          width={300}
          height={100}
        />
        <HomeSearch />
      </div>
      <Footer />
    </div>
  );
}
