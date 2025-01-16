"use client";
import { CameraIcon, Mic, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch(`https://random-word-api.herokuapp.com/word`)
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`search/web?searchTerm=${response}`);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex border max-w-[90%] w-full lg:max-w-xl mx-auto rounded-full p-4 mt-5 px-6 hover:shadow-lg focus-within:shadow-lg"
      >
        <SearchIcon />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full outline-none px-4"
        />
        <Mic />
        <CameraIcon className="ml-4" />
      </form>
      <div className="space-x-6 mt-8">
        <button className="btn" onClick={handleSubmit}>
          Google Search
        </button>
        <button className="btn" onClick={randomSearch}>
          {randomSearchLoading ? "Loading..." : "I'm Feeling Lucky"}
        </button>
      </div>
      <p className="text-sm mt-8">
        Google offered in:
        <span className="text-blue-500 cursor-pointer"> 日本語</span>
      </p>
    </>
  );
}
