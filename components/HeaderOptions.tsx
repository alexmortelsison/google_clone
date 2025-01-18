"use client";
import { CameraIcon, SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function HeaderOptions() {
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
    <div className="flex border-b px-8 md:px-24 text-sm space-x-8">
      <div
        onClick={() => selectTab("All")}
        className={`flex space-x-1 border-b pb-2 border-transparent cursor-pointer ${
          pathname === "/search/web" &&
          "text-blue-500 border-b-2 border-blue-500"
        }`}
      >
        <SearchIcon size={20} />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex space-x-1 border-b pb-2 border-transparent cursor-pointer ${
          pathname === "/search/image" &&
          "text-blue-500 border-b-2 border-blue-500"
        }`}
      >
        <CameraIcon size={20} />
        <p>Images</p>
      </div>
    </div>
  );
}