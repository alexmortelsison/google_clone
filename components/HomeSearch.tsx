"use client";
import React, { useState } from "react";
import { CameraIcon, MicIcon, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?search=${input}`);
  };
  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch(`https://random-word-api.herokuapp.com/word`)
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?search=${response}`);
    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex border w-full max-w-[90%] md:w-4/5 mx-auto lg:max-w-xl px-8 rounded-full py-4 mt-6 hover:shadow-lg shadow-gray-400 focus-within:shadow-lg"
      >
        <SearchIcon />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full px-4 outline-none bg-transparent"
        />
        <MicIcon />
        <CameraIcon className="ml-4" />
      </form>
      <div className="mt-8 space-x-8">
        <button className="btn" onClick={handleSubmit}>
          Google Search
        </button>
        <button className="btn" onClick={randomSearch}>
          {randomSearchLoading ? "Loading..." : "I'm Feeling Lucky"}
        </button>
      </div>
    </>
  );
}
