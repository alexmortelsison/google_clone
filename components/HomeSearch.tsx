"use client";
import { CameraIcon, MicIcon, SearchIcon } from "lucide-react";
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
    if (!input) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch(
      `https://random-word-api.vercel.app/api?words=100`
    )
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex border rounded-full mt-8 w-4/5 md:max-w-2xl py-4 px-6 hover:shadow-lg focus-within:shadow-md"
      >
        <SearchIcon />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="border-transparent w-full outline-none px-4 items-center"
        />
        <MicIcon />
        <CameraIcon className="ml-4" />
      </form>
      <div className="space-x-8 mt-8">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button onClick={randomSearch} className="btn">
          {randomSearchLoading ? "Loading..." : "I'm Feeling Lucky"}
        </button>
      </div>
    </>
  );
}
