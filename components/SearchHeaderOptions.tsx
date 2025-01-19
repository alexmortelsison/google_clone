"use client";
import { CameraIcon, SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function SearchHeaderOptions() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const pathname = usePathname();
  const router = useRouter();
  const selectTab = (tab: string) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  };
  return (
    <div className="flex border-b px-4 md:px-24 space-x-8">
      <div
        onClick={() => selectTab("All")}
        className={`flex border-b-2 border-transparent space-x-1 pb-1 cursor-pointer ${
          pathname === "/search/web" && "text-blue-500 border-blue-500"
        }`}
      >
        <SearchIcon />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex border-b-2 border-transparent space-x-1 pb-1 cursor-pointer ${
          pathname === "/search/image" && "text-blue-500 border-blue-500"
        }`}
      >
        <CameraIcon />
        <p>Images</p>
      </div>
    </div>
  );
}
