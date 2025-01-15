"use client";
import { CameraIcon, Mic, SearchIcon } from "lucide-react";

export default function HomeSearch() {
  return (
    <>
      <form className="flex border px-4 py-4 w-full max-w-[90%] mx-auto md:w-4/5 lg:max-w-xl rounded-full mt-5 hover:shadow-lg shadow-gray-400 focus-within:shadow-gray-200 focus-within:shadow-md">
        <SearchIcon />
        <input
          type="text"
          className="bg-transparent w-full outline-none pl-4"
        />
        <Mic />
        <CameraIcon className="ml-2" />
      </form>
      <div className="space-x-6 text-gray-500">
        <button className="btn">Google Search</button>
        <button className="btn">
          <div>I'm Feeling Lucky</div>
        </button>
      </div>
    </>
  );
}
