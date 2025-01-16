"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { CameraIcon, SearchIcon } from "lucide-react";

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
    <div className="flex mt-8 text-sm px-4 border-b space-x-6">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-transparent active:text-blue-500 border-b-2 pb-1 cursor-pointer ${
          pathname === "/search/web" && "text-blue-600 border-blue-600"
        }`}
      >
        <SearchIcon size={20} />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-transparent active:text-blue-500 border-b-2 pb-1 cursor-pointer ${
          pathname === "/search/image" && "text-blue-600 border-blue-600"
        }`}
      >
        <CameraIcon size={20} />
        <p>Images</p>
      </div>
    </div>
  );
}
