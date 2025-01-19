"use client";
import { CameraIcon, MicIcon, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Searchbox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [input, setInput] = useState(searchTerm || "");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border rounded-full max-w-2xl p-2 ml-4 hover:shadow-lg focus-within:shadow-md"
    >
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="border-transparent w-full outline-none px-4"
      />
      <div className="flex space-x-4 items-center pr-2">
        <X onClick={() => setInput("")} />
        <MicIcon size={38} className="border-l pl-4 hidden md:inline-flex" />
        <CameraIcon className="mr-2 hidden md:inline-flex" />
      </div>
    </form>
  );
}
