import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";
import { Grip } from "lucide-react";
import HomeSearch from "./HomeSearch";

export default function HomeHeader() {
  return (
    <div className="flex justify-end p-2 space-x-4 items-center mr-2 text-sm">
      <Link href={"https://mail.google.com"} className="link">
        Gmail
      </Link>
      <Link href={"https://images.google.com"} className="link">
        Images
      </Link>
      <Grip size={40} className="hover:bg-gray-200 p-2 rounded-full" />
      <Avatar size={40} />
    </div>
  );
}
