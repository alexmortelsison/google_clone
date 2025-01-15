"use client";
import { CameraIcon, Mic, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [searchRandomLoading, setSearchRandomLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
  const randomSearch = async () => {
    setSearchRandomLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`search/web?searchTerm=${response}`);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex border px-4 py-4 w-full max-w-[90%] mx-auto md:w-4/5 lg:max-w-xl rounded-full mt-5 hover:shadow-lg shadow-gray-400 focus-within:shadow-gray-200 focus-within:shadow-md"
      >
        <SearchIcon />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="bg-transparent w-full outline-none pl-4"
        />
        <Mic />
        <CameraIcon className="ml-2" />
      </form>
      <div className="space-x-6 text-gray-500">
        <button className="btn" onClick={handleSubmit}>
          Google Search
        </button>
        <button className="btn" onClick={randomSearch}>
          <div>{searchRandomLoading ? "Loading..." : "I'm Feeling Lucky"}</div>
        </button>
      </div>
    </>
  );
}
