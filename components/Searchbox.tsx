import { CameraIcon, MicIcon, SearchIcon, X } from "lucide-react";
import React from "react";

export default function Searchbox() {
  return (
    <form className="flex w-full border px-8 rounded-full py-2 mt-6 hover:shadow-lg shadow-gray-400 focus-within:shadow-lg items-center">
      <input
        type="text"
        className="w-full px-2 outline-none bg-transparent items-center"
      />
      <X size={45} className=" border-r border-r-gray-300 pr-5" />
      <MicIcon className="ml-4" />
      <CameraIcon className="ml-4" />
    </form>
  );
}
